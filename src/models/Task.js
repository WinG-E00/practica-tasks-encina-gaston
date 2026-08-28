import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 


const Task = sequelize.define('Task', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: [1]
        }
    },

    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1]
        }
    },

    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        validate: {
            isBoolean: true
        }
  },{
  timestamps: true,
  paranoid: true
}
});

export default Task;


//relaciones

// TaskModel.beLongsTo(userModel, { foreignKey: 'userId', as: "autor"});



