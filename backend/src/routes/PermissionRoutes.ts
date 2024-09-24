import express, { request, Request, response, Response } from "express";

/* ROUTER */
const router = express.Router();

/* Import Controllers */
// import {permissionApi} from "../controllers/UserController";


router.post("", (req: Request, res: Response) => {

    // permissionApi.registerUser(req, res)

});

router.get("", (req: Request, res: Response) => {

    // permissionApi.getUsers(req, res)

});


export default router;