import { DataTypes } from "sequelize";
import sequelize from "../../config/database"; // Assuming your database configuration file

const Year = sequelize.define(
    "Year",
    {
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
);

console.log(Year === sequelize.models.Year);

export default Year;