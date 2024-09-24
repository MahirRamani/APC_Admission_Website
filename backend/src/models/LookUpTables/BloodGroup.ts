import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const BloodGroup = sequelize.define(
  "BloodGroup",
  {
    bloodGroup: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value: string) {
        this.setDataValue("bloodGroup", value ? value.toUpperCase() : value);
      },
    },
  },
  {
    timestamps: true,
  }
);

console.log(BloodGroup === sequelize.models.BloodGroup); // true

export default BloodGroup;
