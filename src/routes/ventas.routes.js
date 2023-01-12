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
router.get("/ventas/:idVenta", getVenta);

// DELETE An ventas
router.delete("/ventas/:idVenta", deleteVenta);

// INSERT An ventas
router.post("/ventas", createVenta);

router.patch("/ventas/:idVenta", updateVenta);

export default router;