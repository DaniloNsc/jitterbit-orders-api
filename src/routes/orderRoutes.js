const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrderById,
  listOrders
} = require("../controllers/orderController");

router.post("/order", createOrder);
router.get("/order/list", listOrders);
router.get("/order/:id", getOrderById);

module.exports = router;