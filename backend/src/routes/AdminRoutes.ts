import express, { request, Request, response, Response } from "express";

/* ROUTER */
const router = express.Router();

/* Import Controllers */
import {userApi} from "../controllers/AdminControllers";


router.post("/createUser", (req: Request, res: Response) => {

    userApi.registerUser(req, res)

});

router.get("", (req: Request, res: Response) => {

    userApi.getUsers(req, res)

});

router.post("/user/addPermissions", (req: Request, res: Response) => {
console.log("oooooooooooo");

    userApi.addPermission(req, res)

});

router.get("/user/getPermissions", (req: Request, res: Response) => {

    userApi.getPermissions(req, res)

});

router.delete("/user/deletePermissions", (req: Request, res: Response) => {

    userApi.deletePermission(req, res)

});


export default router;