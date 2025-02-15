import express from 'express';
import { createTicket, getQueryById } from '../controllers/ticketControllers.js';

const router = express.Router();

router.post('/raiseTicket', createTicket);
router.get('/getTickets/:id', getQueryById);

export const ticketRoutes = router;