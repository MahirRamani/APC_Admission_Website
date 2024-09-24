import { request, Request, response, Response } from "express";
import Student from "../models/Student";


const registerStudentProfile = async (req: Request, res: Response) => {
    try {
        const record = await Student.create({ ...req.body });
        return res.json({ record, msg: "Successfully create Student" });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

export default registerStudentProfile;