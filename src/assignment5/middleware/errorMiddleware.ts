import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

const app = express();



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    `Port running on ${PORT}`;
})