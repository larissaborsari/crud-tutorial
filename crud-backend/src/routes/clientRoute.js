import express from 'express';
import * as clientController from '../controllers/clientController.js'

const router = express.Router();

router.get('/client', clientController.getClients);

export default router;