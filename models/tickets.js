import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    raised_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticketing_Users",
        required: true
    },
    Query_title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sub_category: {
        type: String,
        required: true
    },
    language_preference: {
        type: String,
        required: true
    },
    Query_description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["unassigned", "assigned", "closed"],
        default: "unassigned"
    },
    assigned_to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticketing_Users" 
    },
    availableTime: {
        from: {
            type: String,
            required: true,
        },
        till: {
            type: String,
            required: true,
        },
    },
    solution: {
        type: String,
    },
    feedback: {
        type: String,
    },
    rating: {
        type: Number,
    },

}, { timestamps: true })

const Tickets = mongoose.model("Tickets", ticketSchema);

export{ Tickets }