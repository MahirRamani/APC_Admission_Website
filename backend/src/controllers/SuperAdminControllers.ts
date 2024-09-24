import { Request, Response } from "express";
import Student from "../models/Student";

const getStudentProfiles = async (req: Request, res: Response) => {
    try {

        const studentProfiles = await Student.findAll({});
        const noOfStd = studentProfiles.length;
        
        console.log(noOfStd);
        
        return res.json(studentProfiles);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

const editStudentProfiles = async (req: Request, res: Response) => {
    try {

        const studentProfiles = await Student.findAll({});
        const noOfStd = studentProfiles.length;
        
        console.log(noOfStd);
        
        return res.json(studentProfiles);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

const editStudentProfiles = async (req: Request, res: Response) => {
    try {

        const studentProfiles = await Student.findAll({});
        const noOfStd = studentProfiles.length;
        
        console.log(noOfStd);
        
        return res.json(studentProfiles);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

const editStudentProfiles = async (req: Request, res: Response) => {
    try {

        const studentProfiles = await Student.findAll({});
        const noOfStd = studentProfiles.length;
        
        console.log(noOfStd);
        
        return res.json(studentProfiles);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

export const superController = {getStudentProfiles,editStudentProfiles};