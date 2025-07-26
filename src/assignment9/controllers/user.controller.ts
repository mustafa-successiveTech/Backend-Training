import { Request, Response } from "express";
import { handleUserCreation } from "../services/user.service";
import { handleGetUser } from "../services/user.service";

export const createUserController = async (req : Request, res : Response) => {
    try {
        const user = await handleUserCreation(req.body);
        console.log(user);
        res.status(201).json(user);
    } catch (err : any) {
        res.status(400).json({ message: err.message });
    }
}

export const getUserController = async () => {
    try {
        const user = await handleGetUser();
        console.log(user);
        return user;
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Executed");
    }
}