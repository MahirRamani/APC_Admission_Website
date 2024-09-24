import { request, Request, response, Response } from "express";
import User from "../models/User";
import Permission from '../models/Permission';
import UserPermission from "../models/UserPermission";
import { number } from "yup";


interface UserAttributes {
    id: number;
    name: string;
    username: string;
    password: string;
}

const registerUser = async (req: Request, res: Response) => {
    try {
        const body = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
        }
        const record = await User.create(body);
        console.log("record");
        console.log((record as any).id);

        const permissions = req.body.permissions || [];

        permissions.forEach(async (permission: number) => {
            const obj = await UserPermission.create({
                userId: (record as any).id,
                permissionId: permission,
            });

        });

        return res.json({ record, msg: "Successfully create Student" });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};

const getUsers = async (req: Request, res: Response) => {
    try {

        const userList = await User.findAll({});
        const noOfStd = userList.length;

        console.log(noOfStd);

        return res.json(userList);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occured : ${error}` });
    }
};
const addPermission = async (req: Request, res: Response) => {
    try {
        const { name } = req.body; // Expecting the name of the new permission
        console.log(name);

        // Check if the permission already exists
        // const existingPermission = await Permission.findOne({ where: { name } });
        // if (existingPermission) {
        //     return res.status(400).json({ message: "Permission already exists" });
        // }

        // Create the new permission
        const newPermission = await Permission.create({ name });

        console.log(`Permission added: ${name}`);

        return res.status(201).json({ message: "Permission added successfully", permission: newPermission });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occurred: ${error}` });
    }
};

const getPermissions = async (req: Request, res: Response) => {
    try {
        const permissionList = await Permission.findAll({});
        const noOfPermissions = permissionList.length;

        console.log(`Total permissions: ${noOfPermissions}`);

        return res.json(permissionList);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occurred: ${error}` });
    }
};

const deletePermission = async (req: Request, res: Response) => {
    try {
        const { id } = req.body; // Expecting the ID of the permission to delete

        // Find the permission by its ID
        const permissionToDelete = await Permission.findByPk(id);

        if (!permissionToDelete) {
            return res.status(404).json({ message: "Permission not found" });
        }

        // Delete the permission
        await permissionToDelete.destroy();

        //   console.log(`Permission deleted: ${name}`);

        return res.json({ message: "Permission deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: `Error occurred: ${error}` });
    }
};



export const userApi = {
    registerUser, getUsers, addPermission, getPermissions, deletePermission
};