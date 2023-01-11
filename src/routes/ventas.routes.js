import { Router } from "express";
import {
  createVenta,
  deleteVenta,
  getVenta,
  getVentas,
  updateVenta,
} from "../controles/ventas.control.js";

const router = Router();

// GET all ventas
router.get("/ventas", getVentas);

// GET An ventas
router.get("/ventas/:idVendedor", getVenta);

// DELETE An ventas
router.delete("/ventas/:idVendedor", deleteVenta);

// INSERT An ventas
router.post("/ventas", createVenta);

router.patch("/ventas/:idVendedor", updateVenta);

export default router;