import { sequelize } from '../config/database.js';
import  User  from '../User.js';
import Task from '../Task.js';
import { Person } from '../person.js'
import { Categories } from '../categories.js'
import { Tasks_Categories } from '../tasksCategories.js'



 User.hasMany(Task, { 
    foreignKey: 'usuarioId',
    as: 'tareasAsignadas',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


Task.belongsTo(User, {
  foreignKey: 'personId',     
  as: 'user',                 
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});



User.belongsTo(Person, {
  foreignKey: 'personId',
  as: 'personId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});


Person.hasOne(User, {
  foreignKey: 'usuarioId',
  as: 'person',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});






//relacion de muchos a muchos


Tasks_Categories.belongsToMany(Categories, {
  foreignKey: 'categorieId',
  as: 'category'
})

Tasks_Categories.belongsToMany(Task, {
  foreignKey: 'taskId',
  as: 'task'
})


Task.hasMany(Tasks_Categories, {
  foreignKey: 'taskId',
  as: 'tasks_categories',
  onDelete: 'CASCADE'

})

Categories.hasMany(Tasks_Categories, {
  foreignKey: 'categorieId',
  as: 'tasks_categories'
})











/*
modelo.hasMany(elOtroModelo, {
  foreignKey: 'id_usuario', // Nombre de la columna en la tabla 'Tasks'
  as: 'tareasAsignadas',   // Alias para cuando hagas consultas (ej: user.getTareasAsignadas())
  onDelete: 'CASCADE',     // Si borran al usuario, se borran sus tareas
  onUpdate: 'CASCADE'
});
*/