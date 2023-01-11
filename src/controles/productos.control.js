import { pool } from "../db.js"

export const getProductos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos")
    res.json(rows)
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const getProducto = async (req, res) => {
  try {
    const { idProducto } = req.params
    const [rows] = await pool.query("SELECT * FROM producto WHERE idProducto = ?", [
      idProducto,
    ])

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Producto no encontrado" })
    }

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { idProducto } = req.params
    const [rows] = await pool.query("DELETE FROM productos WHERE idProducto = ?", [idProducto])

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Producto no encontrado" })
    }

    //res.sendStatus(204)
    res.status(201).json({ message: "El producto a sido eliminado con éxito" })

  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const createProducto = async (req, res) => {
  try {
    const { productoE, costoE } = req.body
    const [rows] = await pool.query(
      "INSERT INTO productos (productoE, costoE) VALUES (?, ?)",
      [productoE, costoE]
    )
    res.status(201).json({ idProducto: rows.insertId, productoE, costoE})
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};

export const updateProducto = async (req, res) => {
  try {
    const { idProducto } = req.params
    const { productoE, costoE } = req.body

    const [result] = await pool.query(
      "UPDATE productos SET productoE = IFNULL(?, productoE, costoE = IFNULL(?, costoE) WHERE idProducto = ?",
      [productoE, costoE, IdProducto]
    )

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Producto no encontrado" })

    const [rows] = await pool.query("SELECT * FROM productos WHERE idProducto = ?", [
      idProducto,
    ])

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: "te equivocaste" })
  }
};
