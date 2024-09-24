import { Request, Response } from "express";
import Student from "../models/Student";
import jwt from "jsonwebtoken";

import dotenv from 'dotenv';
// import TokenPayload from '../models/TokenPayload';

interface TokenPayload {
    username: string,
    roles: string,
    iat: number
}

dotenv.config();


const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY as string;

const getStudentProfiles = async (req: Request, res: Response) => {

    const authHeader = req.headers['authorization'];
    const token = (authHeader && authHeader.split(' ')[1]) as string;
    if (token == null) return res.sendStatus(401);
    else {
        try {

            jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(402).send('Invalid token');
                }
                console.log(decoded);

                

                // Cast the decoded payload to the TokenPayload interface
                const payload = decoded as TokenPayload;

                if (!(payload.roles === 'Admin')) {
                    return res.status(403).send('Unauthorized');
                }

                // Extract roles from the payload
                // const userRoles = payload.datav;

                // Attach roles to the request object for further use
                // req.userRoles = userRoles;

                // next();
            });
            // };



            const studentProfiles = await Student.findAll({ where: { isAdminPermitted: true } });

            return res.json(studentProfiles);

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: `Error occured : ${error}` });
        }
    }
};

const getPartialFeesPaidStudentProfiles = async (req: Request, res: Response) => {
    try {

        const studentProfiles = await Student.findAll({ where: { isPartialFeesPaid: true } });

        return res.json(studentProfiles);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

const getFullFeesPaidStudentProfiles = async (req: Request, res: Response) => {
    try {

        const studentProfiles = await Student.findAll({ where: { isFullFeesPaid: true } });

        return res.json(studentProfiles);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

// ?

export const accountantStudentProfileApi = {
    getStudentProfiles,
    getPartialFeesPaidStudentProfiles,
    getFullFeesPaidStudentProfiles,
};

// export default { getStudentProfile, getPartialFeesPaidStudentProfiles, getFullFeesPaidStudentProfiles };