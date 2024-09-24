import { Request, Response } from "express";
import Student from "../models/Student";

const getStudentProfile = async (req: Request, res: Response) => {
    try {

        const studentProfiles = await Student.findAll({ where: { isAccountantPermitted: true } });

        return res.json(studentProfiles);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

export default getStudentProfile;