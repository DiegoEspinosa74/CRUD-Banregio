import express from 'express';
import * as creditController from '../controllers/creditRequestController.js';

const router = express.Router();

router.get('/', creditController.getCreditRequests);
router.post('/', creditController.createCreditRequest);

export default router;
