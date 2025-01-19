import { Users } from "../../models/users.js";
import bcrypt from 'bcrypt';


export async function  getUserByEmail(data) {
    return await Users.findOne({
        emailid: data.emailid
    })
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

        res.status(200).json({
            message: "User loggedin successfully",
            data: user,
        });


    } catch (error) {
        console.error("Error occurred during signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }
} 