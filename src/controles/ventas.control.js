import { pool } from "../db.js"

export const getVentas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ventas")
    res.json(rows)
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const getVenta = async (req, res) => {
  try {
    const { idVenta } = req.params
    const [rows] = await pool.query("SELECT * FROM ventas WHERE idVenta = ?", [
      idVenta,
    ])

    if (rows.length <= 0) {
      return res.status(404).json({ message: "La venta no ha sido encontrada" })
    }

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const deleteVenta = async (req, res) => {
  try {
    const { idVenta } = req.params
    const [rows] = await pool.query("DELETE FROM ventas WHERE idVenta = ?", [idVenta])

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "La venta no ha sido encontrada" })
    }

    //res.sendStatus(204)
    res.status(201).json({ message: "La nota ha sido borrada con exito" })

  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const createVenta = async (req, res) => {
  try {
    const { idProducto, precioE } = req.body
    const [rows] = await pool.query(
      "INSERT INTO ventas (idProducto, precioE) VALUES (?, ?)",
      [idProducto, precioE]
    )
    res.status(201).json({ idVenta: rows.insertId, idProducto, precioE})
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const updateVenta = async (req, res) => {
  try {
    const { idVenta } = req.params
    const { idProducto, precioE } = req.body

    const [result] = await pool.query(
      "UPDATE ventas SET idProducto = IFNULL(?, idProducto), precioE = IFNULL(?, precioE) WHERE idVenta = ?",
      [idProducto, precioE, idVenta]
    )

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Venta no encontrada" })

    const [rows] = await pool.query("SELECT * FROM ventas WHERE idVenta = ?", [
      idVenta,
    ])

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};
