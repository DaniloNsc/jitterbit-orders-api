const pool = require("../config/db");
const { mapOrderPayload } = require("../services/orderMapper");

async function createOrder(req, res) {
  const client = await pool.connect();

  try {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

    if (!numeroPedido || !valorTotal || !dataCriacao || !Array.isArray(items)) {
      return res.status(400).json({
        error: "Dados obrigatórios inválidos"
      });
    }

    const mappedOrder = mapOrderPayload(req.body);

    await client.query("BEGIN");

    await client.query(
      `INSERT INTO "Order" ("orderId", "value", "creationDate")
       VALUES ($1, $2, $3)`,
      [
        mappedOrder.orderId,
        mappedOrder.value,
        mappedOrder.creationDate
      ]
    );

    for (const item of mappedOrder.items) {
      await client.query(
        `INSERT INTO "Items" ("orderId","productId",quantity,price)
         VALUES ($1,$2,$3,$4)`,
        [
          mappedOrder.orderId,
          item.productId,
          item.quantity,
          item.price
        ]
      );
    }

    await client.query("COMMIT");

    return res.status(201).json({
      message: "Pedido criado com sucesso",
      order: mappedOrder
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error(error);

    if (error.code === "23505") {
      return res.status(409).json({
        error: "Já existe um pedido com esse ID"
      });
    }

    return res.status(500).json({
      error: "Erro ao criar pedido"
    });
  } finally {
    client.release();
  }
}

async function getOrderById(req, res) {
  try {
    const { id } = req.params;

    const orderResult = await pool.query(
      `SELECT "orderId", "value", "creationDate"
       FROM "Order"
       WHERE "orderId" = $1`,
      [id]
    );

    if (orderResult.rows.length === 0) {
      return res.status(404).json({
        error: "Pedido não encontrado"
      });
    }

    const itemsResult = await pool.query(
      `SELECT "productId", quantity, price
       FROM "Items"
       WHERE "orderId" = $1`,
      [id]
    );

    return res.status(200).json({
      orderId: orderResult.rows[0].orderId,
      value: Number(orderResult.rows[0].value),
      creationDate: orderResult.rows[0].creationDate,
      items: itemsResult.rows.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: Number(item.price)
      }))
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao buscar pedido"
    });
  }
}

async function listOrders(req, res) {
  try {
    const result = await pool.query(
      `SELECT "orderId", "value", "creationDate"
       FROM "Order"
       ORDER BY "creationDate" DESC`
    );

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao listar pedidos"
    });
  }
}

module.exports = { createOrder, getOrderById, listOrders };