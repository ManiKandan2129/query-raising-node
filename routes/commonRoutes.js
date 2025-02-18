import express from 'express';
import { createBatch, createCourse } from '../controllers/commonControllers.js';

const router = express.Router();

router.post('/createCourse', createCourse)
router.post('/createBatch', createBatch)

export const commonRoutes = router;