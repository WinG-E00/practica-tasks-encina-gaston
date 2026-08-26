import express from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/tasks.controllers.js';

//Importacion de validador de create task
import { createdTaskValidator } from '../middlewares/TaskMiddlewares/taskValidator.js';
const router = express.Router();

// post para crear tarea con validador y controlador
router.post('/api/tasks', createdTaskValidator,createTask);


router.get('/api/tasks', getAllTasks);
//Aca lo mismo al momento de hacer la consulta va a tener que traerme un json con los datos de mi user y de la tabla person tambien


router.get('/api/tasks/:id', getTaskById);
// aca lo mismo traigo la tarea por id pero tambien tiene que traer los otros ids supongo


router.put('/api/tasks/:id', updateTask);
// suponogo que aca si se puede solo editar la tarea


router.delete('/api/tasks/:id', deleteTask);
// y bueno aca si haces delete no hace falta que se borre el usuario ni la Person


export default router;
