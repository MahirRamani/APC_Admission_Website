import express, { request, Request, response, Response } from "express";

/* ROUTER */
const router = express.Router();

/* Import Controllers */
import registerStudentProfile from "../controllers/StudentControllers";


router.post("/form",(req: Request, res: Response) => {

    registerStudentProfile(req, res)

});

export default router;