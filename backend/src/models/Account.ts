import Sequelize  from "sequelize";
import db from "../config/database";
import Student from "./Student";

const Account = db.define(
    "Account",
    {
        studentID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        isPartialFeesPaid: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        isFullFeesPaid: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        feesPayDate: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    },
    {}
);

// Account.hasOne(Student);
// Roles.hasOne(Student, {
//     foreignKey: {
//         allowNull: false
//     }
// });
// BloodGroup.hasOne(Student);

// console.log(Account === Sequelize.Model);
console.log("Account");

export default Account;