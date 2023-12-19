import express from 'express';
import paymentController from '../controllers/payment.js';

const router = express.Router();

router.post('/', paymentController.onCreatPayment)
  

export default router;