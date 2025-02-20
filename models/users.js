import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    emailid: {
        type: String,
        required: true,
        unique: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "student", "mentor"],
        default: "student"
    },
    student_batch_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "zen_Batch"
    },
    
}, { timestamps: true });

const Users = mongoose.model("Ticketing_Users", userSchema);

export { Users }