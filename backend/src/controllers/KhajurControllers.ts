import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

const registerUser = async (req: Request, res: Response) => {
    try {
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        req.body.password = hashedPassword;
        
        const user = await User.create({ ...req.body });

        return res.json(user);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

export default registerUser;