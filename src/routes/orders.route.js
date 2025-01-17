import { getOrders, createOrder, getOrderById, resolveOrder } from "../controllers/orders.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/", createOrder);
router.put("/:id", resolveOrder);

export default router;