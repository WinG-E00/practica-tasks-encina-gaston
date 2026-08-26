import  sequelize  from '../../config/database.js';
import  User  from '../User.js';
import Task from '../Task.js';
import Person  from '../person.js'
import Categories  from '../categories.js'
import Tasks_Categories from '../tasksCategories.js'



 User.hasMany(Task, { 
    foreignKey: 'usuarioId',
    as: 'tareasAsignadas',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


Task.belongsTo(User, {
  foreignKey: 'usuarioId',     
  as: 'user',                 
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});



User.belongsTo(Person, {
  foreignKey: 'userId',
  as: 'person',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});


Person.hasOne(User, {
  foreignKey: 'userId',
  as: 'user',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});






//relacion de muchos a muchos

Task.belongsToMany(Categories,{
    through: Tasks_Categories,
    foreignKey: 'taskId',
    otherKey: 'categoryId'
});


Categories.belongsToMany(Task, {
  through: Tasks_Categories,
  foreignKey: 'categoryId',
  otherKey: 'taskId'
});












/*
modelo.hasMany(elOtroModelo, {
  foreignKey: 'id_usuario', // Nombre de la columna en la tabla 'Tasks'
  as: 'tareasAsignadas',   // Alias para cuando hagas consultas (ej: user.getTareasAsignadas())
  onDelete: 'CASCADE',     // Si borran al usuario, se borran sus tareas
  onUpdate: 'CASCADE'
});
*/