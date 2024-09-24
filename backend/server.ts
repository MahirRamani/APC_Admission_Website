/* Imports */
import express, { Request, Response } from "express";
import db from "./src/config/database";
import cors from "cors";
import Student from "./src/models/Student";
import Account from "./src/models/Account";
import Roles from "./src/models/Roles";
import Permission from "./src/models/Permission";
import User from "./src/models/User";
import UserPermission from "./src/models/UserPermission";

/* STARTUP */
db.sync().then(() => console.log('Database is Ready!'));
console.log("1");
// db.sync({ alter: true }).then(() => console.log('Database is Ready!'));
// db.sync({ force: true }).then(() => console.log('Database is Ready!'));
// above will run after *app.listen()* with *Priority*

Account.sync().then(() => console.log("Account synced !"))
Student.sync().then(() => console.log("Student synced !"))
Roles.sync().then(() => console.log("Roles synced !"))
Permission.sync().then(() => console.log("Permission synced !"))
User.sync().then(() => console.log("User synced !"))
UserPermission.sync().then(() => console.log("UserPermission synced !"))

// db.sync()

/* EXPRESS CONFIGURATIONS */
const app = express()
const port = 3300
console.log("2");


app.use(cors());
app.use(express.json());
console.log("3");

app.get('/', (req: Request, res: Response) => {
  console.log("4");
  return res.send('Hello Mahir!')
  })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  console.log("5");
})


/* ROUTERs */
import studentRouter from "./src/routes/StudentRoutes";
import admintRouter from "./src/routes/AdminRoutes"
import accountantRouter from "./src/routes/AccountantRoutes";
import attendenceDeptRouter from "./src/routes/AttendenceDeptRoutes";
import userRouter from "./src/routes/UsersRoutes";
import userAuthRouter from "./src/routes/UserAuthRoutes";
import khajurRouter from "./src/routes/KhajurRoutes";

console.log("6");

/* MIDDLEWAREs */
import idNumberControl from "./src/middlewares/Middle";

console.log("7");

/* APIs */
app.use("/user", userRouter);
app.use("/admin", admintRouter);
app.use("/attendenceDept", attendenceDeptRouter);
app.use("/accountant", accountantRouter);
app.use("/student/form", studentRouter);
// ==========================
app.use("/Khajur", khajurRouter);
app.use("/auth", userAuthRouter);

console.log("8");

// app.post("/createStd", async (req: Request, res: Response) => {
  //   console.log(req.body);
  //   const record = await Student.create({ ...req.body });
  
  //   return res.json({ record, msg: "Successfully create user" });
  // });

// app.get('/admin/getStudentProfiles', (req, res) => {
//   res.json([
//     { id: 1, firstName: "John", pincode: "123456", isIDCardCreated: true },
//     { id: 2, firstName: "Jane", pincode: "654321", isIDCardCreated: false },
//   ]);
// });