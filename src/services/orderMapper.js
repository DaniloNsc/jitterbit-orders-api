function mapOrderPayload(payload) {
  return {
    orderId: payload.numeroPedido,
    value: Number(payload.valorTotal),
    creationDate: new Date(payload.dataCriacao),
    items: (payload.items || []).map((item) => ({
      productId: Number(item.idItem),
      quantity: Number(item.quantidadeItem),
      price: Number(item.valorItem),
    })),
  };
}

module.exports = { mapOrderPayload };