import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
    // id (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // name (STRING(100), NOT NULL). No vacío y máx 100 caracteres.
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1]
        }
    },
    // email (STRING(100), UNIQUE, NOT NULL). No vacío y máx 100 caracteres.
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true, // Aunque no se pide explícitamente, es buena práctica para un email
            len: [1]
        }
    },
    // password (STRING(100), NOT NULL). No vacío y máx 100 caracteres.
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1]
        }
    }
}, {
    timestamps: true
});

export default User;