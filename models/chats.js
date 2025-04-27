import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    ticket_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tickets",
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticketing_Users",
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Chat = mongoose.model("Ticketing_Chat", chatSchema);

export { Chat };
