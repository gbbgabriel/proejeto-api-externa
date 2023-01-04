import { Router, Response } from 'express'
import * as apiController from '../controller/apiController'

const router = Router()



router.get('/pokemon/:id', apiController.pokemon)
router.get('/', apiController.test)

export default router