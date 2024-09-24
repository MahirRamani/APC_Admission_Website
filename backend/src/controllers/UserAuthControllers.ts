import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();


const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY as string;



const logIn = async (req: Request, res: Response) => {

    console.log(JWT_SECRET_KEY);
    const { username, password } = req.body;

    try {

        const user = await User.findOne({ where: { 'username': username } });

        console.log(user);
        // console.log(user?.dataValues.password);

        if (!user || !(await bcrypt.compare(password, user?.dataValues.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({
            username: user.dataValues.username,
            roles: user.dataValues.role
        },
            JWT_SECRET_KEY);
        res.status(200).json({ token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Login failed' });
    }
};

export default logIn;