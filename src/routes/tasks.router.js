import express from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/tasks.controllers.js';

const router = express.Router();

router.post('/api/tasks', createTask);
// cuando yo cree una tarea siosi mi controlador va a tener que tener una validacion que me diga si es que 
// el json con el que hago el metodo, no tiene un usuario entonces la tabla no se va a poder crear

router.get('/api/tasks', getAllTasks);
//Aca lo mismo al momento de hacer la consulta va a tener que traerme un json con los datos de mi user y de la tabla person tambien

router.get('/api/tasks/:id', getTaskById);
// aca lo mismo traigo la tarea por id pero tambien tiene que traer los otros ids supongo

router.put('/api/tasks/:id', updateTask);
// suponogo que aca si se puede solo editar la tarea

router.delete('/api/tasks/:id', deleteTask);
// y bueno aca si haces delete no hace falta que se borre el usuario ni la Person


export default router;
