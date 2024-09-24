import express, { Request, Response } from "express";

/* ROUTER */
const router = express.Router();

/* Import Controllers */
import getStudentProfiles from "../controllers/UserController";


router.get("/getStudentProfiles", (req: Request, res: Response) => {

    getStudentProfiles(req, res)

});



export default router;