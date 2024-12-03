import express from 'express';
import * as clientController from '../controllers/clientController.js';

const router = express.Router();

router.get('/', clientController.getClients);
router.post('/', clientController.createClient);

export default router;
