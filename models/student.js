import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticketing_Users",
        required: true,
    },
    batch: {
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    },

},{ timestamps: true });

const StudentDetails = mongoose.model("mentor_details", studentSchema);

export{ StudentDetails }