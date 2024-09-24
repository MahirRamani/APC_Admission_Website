import Sequelize from "sequelize";
import db from "../config/database";

const Permission = db.define(
    "Permission",
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {}
);

// Permission.hasOne(UserPermission);
// Permission.hasOne(Permission);
// BloodGroup.hasOne(Student);

console.log("Permission Table !");

export default Permission;