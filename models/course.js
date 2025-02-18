import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required: true
    },
    syllabus: [
        {
            module_name: { type: String, required: true },
            topics: [{ type: String, required: true }]
        }
    ],
    language_medium: {
        type: String,
        required: true
    },
})

const Courses =  mongoose.model("zen_course", courseSchema);

export { Courses }