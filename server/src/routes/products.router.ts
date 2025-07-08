import { Router } from 'express'
import { getProducts } from '../controllers/products.controller'

const productRouter = Router()

productRouter.get('/products', getProducts)

export default productRouter