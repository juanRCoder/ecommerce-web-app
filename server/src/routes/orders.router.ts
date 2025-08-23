import { Router } from 'express'
import { getOrders, getOrderById, createOrder } from '../controllers/orders.controller'

const orderRouter = Router()

orderRouter.get('/orders', getOrders)
orderRouter.get('/orders/:id', getOrderById)
orderRouter.post('/orders', createOrder)

export default orderRouter