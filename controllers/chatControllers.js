import { Chat } from "../models/chats.js";




// Send a new message
export const sendMessage = async (req, res) => {
    try {
        const { ticket_id, sender, message } = req.body;

        const newMessage = new Chat({
            ticket_id,
            sender,
            message
        });

        await newMessage.save();

        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error sending message" });
    }
};


// Get all messages for a ticket
export const getMessages = async (req, res) => {
    try {
        const { ticket_id } = req.params;

        const messages = await Chat.find({ ticket_id }).sort({ timestamp: 1 }).populate("sender", "firstname lastname role");

        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error fetching messages" });
    }
};