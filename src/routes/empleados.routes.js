import { Router } from "express";
import {
  createEmpleado,
  deleteEmpleado,
  getEmpleado,
  getEmpleados,
  updateEmpleado,
} from "../controles/empleados.control.js";

const router = Router();

// GET all Employees
router.get("/empleados", getEmpleados);

// GET An Empleado
router.get("/empleados/:id", getEmpleado);

// DELETE An Empleado
router.delete("/empleados/:id", deleteEmpleado);

// INSERT An Empleado
router.post("/empleados", createEmpleado);

router.patch("/empleados/:id", updateEmpleado);

export default router;
