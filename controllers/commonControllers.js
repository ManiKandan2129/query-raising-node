import { Batches } from "../models/batch.js";
import { Courses } from "../models/course.js";


export async function createCourse(req, res) {
    try {
        
        const body = req.body;

        const course = await new Courses(body).save();

        res.status(201).json({message: "Course added successfully", data: course})

    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal server error" })  
    }   
}


export async function createBatch(req, res) {
    try {
        
        const payload = req.body;

        const batch = await new Batches(payload).save();

        res.status(201).json({message:"batch created successfully", data: batch})

    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal server error" })  
    }
}