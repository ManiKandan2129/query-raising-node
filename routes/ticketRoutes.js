import express from 'express';
import { createTicket, getQueryById, getQueryByQueryId } from '../controllers/ticketControllers.js';

const router = express.Router();

router.post('/raiseTicket', createTicket);
router.get('/getTickets/:id', getQueryById);
router.get('/viewQuery/:id', getQueryByQueryId);

export const ticketRoutes = router;