import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js'


export const Categories = sequelize.define('Categories',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    education: {
        type: DataTypes.BOOLEAN,
        allowNull: false,



    },

    home: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

    },

    work: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    other: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }


},{
    timestamps: true
})


export default Categories;