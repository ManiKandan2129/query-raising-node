import express from 'express';
import { login, signupUser } from './controllers/authControllers.js';

const router = express.Router();;


router.get('/', (req,res) => {
    res.send("Hello, Wolrd")
})

router.post('/signup', signupUser)
router.post('/login', login)

export const authRoutes = router;