import dotenv from 'dotenv';
import express from 'express';
import dataBaseConnection from './db.js';
import cors from 'cors'
import { authRoutes } from './routes/authRoutes.js';
import { ticketRoutes } from './routes/ticketRoutes.js';
import { commonRoutes } from './routes/commonRoutes.js';
import { chatRoutes } from './routes/chatRoutes.js';
import { Chat } from './models/chats.js';
import { createServer } from "http";
import { Server } from "socket.io";


const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*", // Allow from any origin. In production, restrict this!
        methods: ["GET", "POST"]
    }
});

app.use(express.json());
app.use(cors())
dotenv.config();

dataBaseConnection()


const PORT = process.env.PORT;

app.use('/auth', authRoutes)
app.use('/ticket', ticketRoutes)
app.use('/common', commonRoutes)
app.use("/api/chat", chatRoutes);


// SOCKET.IO - real time logic
io.on("connection", (socket) => {
    console.log("User connected: " + socket.id);

    // Join a ticket-specific room
    socket.on("join_ticket", (ticket_id) => {
        socket.join(ticket_id);
        console.log(`User ${socket.id} joined ticket room: ${ticket_id}`);
    });

    // Handle sending a message
    socket.on("send_message", async (data) => {
        const { ticket_id, sender, message } = data;

        // Save message to database
        const newMessage = new Chat({
            ticket_id,
            sender,
            message
        });
        await newMessage.save();

        // Emit to all users in the same ticket room
        io.to(ticket_id).emit("receive_message", {
            _id: newMessage._id,
            ticket_id,
            sender,
            message,
            timestamp: newMessage.timestamp
        });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected: " + socket.id);
    });
});

// Start Server
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });
