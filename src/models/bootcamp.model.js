import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Bootcamp = sequelize.define(
    "bootcamps",
    {
        title:{
            type:DataTypes.STRING(200),
            allowNull:false,
        },
        cue: {
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
                min:5,
                max:20,
    
            }
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false,
        }
    },
)

export default Bootcamp;