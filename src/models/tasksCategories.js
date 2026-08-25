import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';


export const Tasks_Categories = sequelize.define('Tasks_Categories', {

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }

})


export default Tasks_Categories;