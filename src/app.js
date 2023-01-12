import express from "express"


import empleadosRoutes from "./routes/empleados.routes.js"
import productosRoutes from "./routes/productos.routes.js"
import ventasRoutes from "./routes/ventas.routes.js"
import indexRoutes from "./routes/index.routes.js"

const app = express()

// Middlewares

app.use(express.json())

// Routes
app.use( indexRoutes)
app.use("/api", empleadosRoutes)
app.use("/api", productosRoutes)
app.use("/api", ventasRoutes)

app.use((req, res, next) => {
  res.status(404).json({ message: "No se encuentra" })
})

export default app;