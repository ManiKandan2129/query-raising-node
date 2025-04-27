import express from 'express';
import { assignQuery, createTicket, getAllQueries, getQueryById, getQueryByQueryId } from '../controllers/ticketControllers.js';

const router = express.Router();

router.post('/raiseTicket', createTicket);
router.get('/getTickets/:id', getQueryById);
router.get('/viewQuery/:id', getQueryByQueryId);
router.get('/getAllQueries', getAllQueries);
router.post('/assignQuery', assignQuery);

export const ticketRoutes = router;