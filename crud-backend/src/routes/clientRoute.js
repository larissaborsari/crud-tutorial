import express from 'express';
import * as clientController from '../controllers/clientController.js'

const router = express.Router();

router.get('/client', clientController.getClients);
router.post('/client', clientController.createClient);
router.put('/client/:id', clientController.updateClient);
router.delete('/client/:id', clientController.deleteClient);
router.get('/client/search', clientController.searchClients); 

export default router;