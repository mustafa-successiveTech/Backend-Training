import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

const router = express.Router();

router.get('/async-error', async (req : Request, res : Response, next : NextFunction) => {
    console.log("Before try");
  try {
    console.log("Inside try");
    await Promise.reject(new Error('Something went wrong in async!'));
  } catch (err : any) {
    next(createError(500, err.message));  
  }
});

export default router;

