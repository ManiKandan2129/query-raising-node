import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getUserById } from '../controllers/authControllers';

dotenv.config();

const isAuthorized = async(req, res, next) => {
    let token;
    if(req.headers){
        try {
            
            token = await req.headers['authenticate-token'];
            if(!token){
                return res.status(404).json({error:"token not found"});
            }

            const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await getUserById(decodedToken.id);
            next()

        } catch (error) {
            console.log("Error Recieved", error)
        }
    }
}

export { isAuthorized }