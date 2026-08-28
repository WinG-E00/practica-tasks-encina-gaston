import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true,
            len: [1, 100]
        }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [6, 100]
        }
    }
}, {
    timestamps: true,
    paranoid: true
});

export default Tasks_Categories;


User
Task
Person
Categories
