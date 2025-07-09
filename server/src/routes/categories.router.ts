import { Router } from 'express'
import { getCategories } from '../controllers/categories.controller'

const categoryRouter = Router()

categoryRouter.get('/categories', getCategories)

export default categoryRouter