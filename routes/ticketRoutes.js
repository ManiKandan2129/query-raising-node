import express from 'express';
import { createTicket } from '../controllers/ticketControllers.js';

const router = express.Router();

router.post('/raiseTicket', createTicket)

export const ticketRoutes = router;