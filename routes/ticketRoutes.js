import express from 'express';
import { assignQuery, CloseQuery, createTicket, dropQuery, getAllQueries, getQueryById, getQueryByQueryId } from '../controllers/ticketControllers.js';

const router = express.Router();

router.post('/raiseTicket', createTicket);
router.get('/getTickets/:id', getQueryById);
router.get('/viewQuery/:id', getQueryByQueryId);
router.get('/getAllQueries', getAllQueries);
router.post('/assignQuery', assignQuery);
router.post('/closeQuery', CloseQuery);
router.post('/dropQuery', dropQuery);

export const ticketRoutes = router;