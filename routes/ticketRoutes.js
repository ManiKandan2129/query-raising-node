import express from 'express';
import { createTicket, getAllQueries, getQueryById, getQueryByQueryId } from '../controllers/ticketControllers.js';

const router = express.Router();

router.post('/raiseTicket', createTicket);
router.get('/getTickets/:id', getQueryById);
router.get('/viewQuery/:id', getQueryByQueryId);
router.get('/getAllQueries', getAllQueries)

export const ticketRoutes = router;