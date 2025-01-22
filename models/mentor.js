import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticketing_Users",
        required: true,
    },
    availableBatches: [String],
    department:{
        type: String,
        required: true
    },
    expertise:[String]


},{ timestamps: true });

const MentorDetails = mongoose.model("mentor_details", mentorSchema);

export{ MentorDetails }