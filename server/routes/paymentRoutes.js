import express from 'express'
import { checkout, paymentVerify } from '../controllers/paymentController.js'

const router = express.Router()

router.route('/checkout').post(checkout)
router.route('/paymentVerify').post(paymentVerify)

export default router