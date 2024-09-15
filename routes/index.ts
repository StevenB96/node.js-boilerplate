import path from 'path';
import express, { Router } from 'express';
import db from '../config/db';

const router: Router = express.Router();

// "Hello World" route for testing.
router.get('/hello_world', (req, res) => {
    res.send('Hello World!');
});

// Get process information.
router.get('/process_information', (req, res) => {
    res.send(`
      <ul>
        <li>Node Env: ${process.env.NODE_ENV}</li>
        <li>DB Env: ${process.env.DB_ENV}</li>
        <li>Server Url: ${process.env.SERVER_URL}</li>
        <li>Server Port: ${process.env.SERVER_PORT}</li>
        <li>Allowed Origins: ${process.env.ALLOWED_ORIGINS}</li>
      </ul>
    `);
});

export default router;