import express from 'express';
import userRouter from "./UsersRoutes";
import admintRouter from "./AdminRoutes";
import attendenceDeptRouter from "./AttendenceDeptRoutes";
import accountantRouter from "./AccountantRoutes";
import studentRouter from "./StudentRoutes";
import userAuthRouter from "./UserAuthRoutes";

/* ROUTER */
const router = express.Router();

/* APIs */
router.use("/user", userRouter);
router.use("/admin", admintRouter);
// SMS
// DKS
router.use("/attendenceDept", attendenceDeptRouter);
router.use("/accountant", accountantRouter);
router.use("/student", studentRouter);
// ==========================
router.use("/auth", userAuthRouter);


export default router;