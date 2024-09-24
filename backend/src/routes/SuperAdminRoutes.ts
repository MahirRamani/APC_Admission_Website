import express, { Request, Response } from "express";

/* ROUTER */
const router = express.Router();

/* Import Controllers */
import { superController } from "../controllers/SuperAdminControllers"; "../controllers/SuperAdminControllers";
import registerStudentProfile from "../controllers/StudentControllers";


router.get("/getStudentProfiles", (req: Request, res: Response) => {

    superController.getStudentProfiles(req, res)

});

router.get("/editStudentProfiles", (req: Request, res: Response) => {

    superController.editStudentProfiles(req, res)

});

router.post("/register/permission", (req: Request, res: Response) => {

    superController.addPermission(req, res)

});

router.post("/register/user", (req: Request, res: Response) => {

    superController.addUser(req, res)

});

export default router;

