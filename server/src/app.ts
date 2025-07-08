import express from 'express'
import 'dotenv/config'
import productRouter from './routes/products.router'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use('/api', productRouter);

app.get('/', (req, res) => {
  res.send('running server')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
