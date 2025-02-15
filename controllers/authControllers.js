import { Users } from "../models/users.js";
import bcrypt from 'bcrypt';
import  Jwt  from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();



export async function  getUserByEmail(data) {
    return await Users.findOne({
        emailid: data.emailid
    })
}

export async function getUserById(id) {
    return await Users.findById(id);
}


export async function generateToken(data){
    return Jwt.sign({
        id: data._id,
        email: data.emailid
    }, process.env.JWT_SECRET_KEY)
}


export async function signupUser(req, res) {
    try {
        const body = req.body;

        // Check if the user already exists
        let user = await getUserByEmail(body);

        if (user) {
            console.log("User already exists:", user);
            return res.status(400).json({ err: "User already exists...!" });
        }

        //hashing password
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(body.password, salt)

        // Save the new user
        user = await new Users({
            ...body, password: hashedPassword
        }).save();

        res.status(201).json({
            message: "User registered successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error occurred during signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function login(req, res) {
    try {
        let user = await getUserByEmail(req.body);

        if(!user){
            return res.status(404).json({err: "user not found"})
        }

        //Validating Password
        const validatePassword = await bcrypt.compare(req.body.password, user.password);
        if(!validatePassword){
            return res.status(404).json({err: "Incorrect Password"})
        }

        const token = await generateToken(user)

        res.status(200).json({
            message: "User loggedin successfully",
            token: token,
            userData: user,
        });


    } catch (error) {
        console.error("Error occurred during signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }
} 