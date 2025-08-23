import express from 'express'
import 'dotenv/config'
import cors from 'cors';
import productRouter from './routes/products.router'
import categoryRouter from './routes/categories.router'
import orderRouter from './routes/orders.router';

const app = express()
app.use(cors());
const PORT = process.env.PORT

app.use(express.json())
app.use('/api', productRouter)
app.use('/api', categoryRouter)
app.use('/api', orderRouter)

app.get('/', (req, res) => {
  res.status(200).json({message: 'running server'})
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
