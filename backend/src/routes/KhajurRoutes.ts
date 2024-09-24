import express, { Request, Response } from "express";

/* ROUTER */
const router = express.Router();

/* Import Controllers */
import registerUser from "../controllers/KhajurControllers";


router.post("/registerUser", (req: Request, res: Response) => {

    registerUser(req, res)

});

export default router;