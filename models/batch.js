import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
    batch_name: {
        type: String,
        required: true
    },
    batch_duration:{
        type: String,
        required: true
    },
    batch_timing:{
        type: String,
        required: true
    },
    language_medium:{
        type: String,
        required: true
    },
    batch_duration:{
        type: String,
        required: true
    }
})