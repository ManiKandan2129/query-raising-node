import { Tickets } from "../models/tickets.js";

export async function createTicket(req, res){
    try {

        const body = req.body;

        let createdTicket = await new Tickets(body).save();

        res.status(201).json({
            message: "ticket created successfully",
            data: createdTicket,
        });
        
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal server error" })
    }
}

export async function getQueryById(req, res) {
    try {
        
        const userId = req.params.id;

        const tickets = await Tickets.find({raised_by: userId});

        res.status(201).json({
            data: tickets,
        });

    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal server error" })
    }  
}