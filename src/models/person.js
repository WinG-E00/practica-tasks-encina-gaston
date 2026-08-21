import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js'



export const Person = sequelize.define('Person', {


    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
},{
    timestamps: true
}

)

