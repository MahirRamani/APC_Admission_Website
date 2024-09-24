import Sequelize from "sequelize";
import db from "../config/database";

const User = db.define(
    "User",
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {}
);

// User.hasOne(UserPermission);
// User.hasOne(Permission);
// BloodGroup.hasOne(Student);

console.log("User Table !");

export default User;