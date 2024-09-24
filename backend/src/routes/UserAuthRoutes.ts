import express, { Request, Response } from "express";

/* ROUTER */
const router = express.Router();

/* Import Controllers */
import login from "../controllers/UserAuthControllers";


router.post("/login", (req: Request, res: Response) => {

    login(req, res)

});
export default router;