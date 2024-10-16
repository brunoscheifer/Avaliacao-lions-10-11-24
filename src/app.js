import express from 'express'
import connectDB from "./config/db.js"
import workshopRoutes from './routes/workshopRoutes.js'
import vehicleRoutes from "./routes/vehicleRoutes.js"
import maintenanceRoutes from './routes/maintenenceRoutes.js'

connectDB()

const app = express()
app.use(express.json())

app.use('/workshop', workshopRoutes)
app.use('/vehicles', vehicleRoutes)
app.use('/maintenence', maintenanceRoutes)


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));