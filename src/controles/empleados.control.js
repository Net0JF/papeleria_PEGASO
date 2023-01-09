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
    const { idEmpleado } = req.params
    const [rows] = await pool.query("SELECT * FROM empleados WHERE idEmpleado = ?", [
      idEmpleado,
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
    const { idEmpleado } = req.params
    const [rows] = await pool.query("DELETE FROM empleados WHERE idEmpleado = ?", [idEmpleado])

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Empleado no encontrado" })
    }

    //res.sendStatus(204)
    res.status(201).json({ message: "Empleado borrado con éxito" })

  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const createEmpleado = async (req, res) => {
  try {
    const { nombreE, salarioE } = req.body
    const [rows] = await pool.query(
      "INSERT INTO empleados (nombreE, salarioE) VALUES (?, ?)",
      [nombreE, salarioE]
    )
    res.status(201).json({ idEmpleado: rows.insertId, nombreE, salarioE })
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const { idEmpleado } = req.params
    const { nombreE, salarioE } = req.body

    const [result] = await pool.query(
      "UPDATE empleados SET nombreE = IFNULL(?, nombreE), salarioE = IFNULL(?, salarioE) WHERE idEmpleado = ?",
      [nombreE, salarioE, idEmpleado]
    )

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Empleado no encontrado" })

    const [rows] = await pool.query("SELECT * FROM empleados WHERE idEmpleado= ?", [
      idEmpleado,
    ])

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};
