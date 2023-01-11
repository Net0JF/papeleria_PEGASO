import { Router } from "express";
import {
  createProducto,
  deleteProducto,
  getProducto,
  getProductos,
  updateProducto,
} from "../controles/productos.control.js";

const router = Router();

// GET all productos
router.get("/productos", getProductos);

// GET An producto
router.get("/productos/:idProducto", getProducto);

// DELETE An producto
router.delete("/productos/:idProducto", deleteProducto);

// INSERT An producto
router.post("/productos", createProducto);

router.patch("/productos/:idProducto", updateProducto);

export default router;