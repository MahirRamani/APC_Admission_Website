import {Sequelize, DataTypes}  from "sequelize";
import db from "../config/database";
import Student from "./Student";

const Roles = db.define(
    "Roles",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        permissions: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        }
    },
    {}
);

// Roles.hasOne(Student);
// BloodGroup.hasOne(Student);

// console.log(Roles === Sequelize.Model);
console.log("Roles");
// Roles.sync().then(() => console.log("Roles synced!!"));

export default Roles;