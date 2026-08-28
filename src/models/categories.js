import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js'


export const Categories = sequelize.define('Categories',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    categoryType: {
        type: DataTypes.STRING,
    }


},{
  timestamps: true,
  paranoid: true
})


export default Categories;
