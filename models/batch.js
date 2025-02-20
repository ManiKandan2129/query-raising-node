import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
    batch_name: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "zen_course"
    },
    batch_duration: {
        type: String,
        required: true
    },
    batch_timing: {
        start_time: {
            type: String,
            required: true,
        },
        end_time: {
            type: String,
            required: true,
        },
    },
    instructor_ids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticketing_Users" 
    }],
    student_ids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticketing_Users" 
    }],
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
});

const Batches =  mongoose.model("zen_Batch", batchSchema);

export{ Batches }