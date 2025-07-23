import express, {Request, Response} from 'express'

export const validateFunction = (req : Request, res : Response): Response | void => {
    console.log('joi-validator routes');
    return res.status(200).json({
        message:"Joi-Validated"
    })
};