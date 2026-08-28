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
            len: [1, 100] // Rango correcto
        }
    },
    password: {
        type: DataTypes.STRING(255), // Aumentado a 255 para soportar hashes sin problemas
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [6, 100] // Mínimo 6 caracteres para mayor seguridad
        }
    }
}, {
  timestamps: true,
  paranoid: true,
});

export default User;





// // Relaciones...
// UserModel.belongsTo(PersonModel, {foreignKey: 'person_id', as: 'person_id'});
