import { Request, Response } from "express";
import SeededUser from "../seeders/seedUsers";

export const mockData = (req : Request, res : Response) => {
    const users = SeededUser(5);
    return res.status(200).json(users);
}