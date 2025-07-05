import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API corriendo 🎉')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
