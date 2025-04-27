import express from "express";
import { sendMessage, getMessages } from '../controllers/chatControllers.js';

const router = express.Router();

// Send a message
router.post("/send", sendMessage);

// Get all messages for a ticket
router.get("/:ticket_id", getMessages);


export const chatRoutes = router;
