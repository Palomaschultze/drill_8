import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";



const User = sequelize.define(
    'users',
    {
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING(254),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            },
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [8]
            }
        },
        status:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }
)

export default User;
