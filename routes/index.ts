import path from 'path';
import express, { Router } from 'express';
import db from '../config/db';

const router: Router = express.Router();

// Define the "Hello World" route
router.get('/hello', (req, res) => {
    res.send('Hello World!');
});

export default router;