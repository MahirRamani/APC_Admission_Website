/* Imports */
import express, { Request, Response } from "express";
import db from "./src/config/database";
import cors from "cors";
import Student from "./src/models/Student";
import Account from "./src/models/Account";
import Permission from "./src/models/Permission";
import User from "./src/models/User";
import UserPermission from "./src/models/UserPermission";
import router from "./src/routes/index";
import dbSync from "./scripts/DBSync";

/* EXPRESS CONFIGURATIONS */
const app = express()
const port = 3300

dbSync();

/* JSON & CORS CONFIGURATIONS */
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello Mahir!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


app.use("/", router);