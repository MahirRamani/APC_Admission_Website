import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database"; // Assuming this is your Sequelize instance

interface UserPermissionAttributes {
  id?: number;
  userId: number;
  permissionId: number;
}

export class UserPermission extends Model<UserPermissionAttributes> implements UserPermissionAttributes {
  public id!: number;
  public userId!: number;
  public permissionId!: number;
}

UserPermission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UserPermission",
    timestamps: true,
  }
);
export default UserPermission;
