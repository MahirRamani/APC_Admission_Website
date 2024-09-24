import express, { Request, Response } from "express";

/* ROUTER */
const router = express.Router();

/* Import Controllers */
import {accountantStudentProfileApi} from "../controllers/AccountantControllers";
// import getStudentProfiles from "../controllers/AccountantControllers";
// import getPartialFeesPaidStudentProfiles from "../controllers/AccountantControllers";
// import getFullFeesPaidStudentProfiles from "../controllers/AccountantControllers";
// ?

router.get("/getStudentProfiles", (req: Request, res: Response) => {

    accountantStudentProfileApi.getStudentProfiles(req, res)

});

router.get("/getPartialFeesPaidStudentProfiles", (req: Request, res: Response) => {

    accountantStudentProfileApi.getPartialFeesPaidStudentProfiles(req, res)

});

router.get("/getFullFeesPaidStudentProfiles", (req: Request, res: Response) => {

    accountantStudentProfileApi.getFullFeesPaidStudentProfiles(req, res)

});

export default router;