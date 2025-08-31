import { Router } from 'express'
import { getOrders, getOrderById, createOrder } from '../controllers/orders.controller'
import { uploader } from '../config/multer'

const orderRouter = Router()

orderRouter.get('/orders', getOrders)
orderRouter.get('/orders/:id', getOrderById)
orderRouter.post('/orders', uploader("imageVoucher"), createOrder)

export default orderRouter