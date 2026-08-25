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
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 100] // Rango correcto: mínimo 1, máximo 100
        }
    },
    
},{
    timestamps: true,
}

);

export default Person