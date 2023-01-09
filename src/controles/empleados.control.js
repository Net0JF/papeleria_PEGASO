import { pool } from "../db.js"

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados")
    res.json(rows)
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const getEmpleado = async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      id,
    ])

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Empleado no encontrado" })
    }

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query("DELETE FROM empleados WHERE id = ?", [id])

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Empleado no encontrado" })
    }

    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const createEmpleado = async (req, res) => {
  try {
    const { nombre, salario } = req.body
    const [rows] = await pool.query(
      "INSERT INTO empleados (nombre, salario) VALUES (?, ?)",
      [nombre, salario]
    )
    res.status(201).json({ id: rows.insertId, nombre, salario })
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, salario } = req.body

    const [result] = await pool.query(
      "UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?",
      [nombre, salario, id]
    )

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Empleado no encontrado" })

    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      id,
    ])

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};
