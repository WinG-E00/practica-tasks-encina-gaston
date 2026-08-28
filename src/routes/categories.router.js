import express from 'express';
//Aca tengo que importar mi controlador
import { createTaskCategories, createCategorie } from '';
import { validatorCrearCategoria } from '../middlewares/categoriesMiddlewares/categoriesValidator.js';


const router =  express.router();

//Aca va el controlador para crear una tarea asociada a task
router.post('/api/categorie/create_task_category',  createTaskCategories );


//Aca tengo que crear el controlador para poder crear la categorie
router.post('/api/categorie/create', validatorCrearCategoria, createCategorie);


//Nuevos routers que faltan crear controladores y validadores
//Obtener categorias de un registro en especifico
router.get('/api/categorie/:id')

//Obtener todas las categorias
router.get('/api/categorie')



//Ruta para actualizar una persona...
router.put('/api/categorie/:id')



//Ruta para eliminar una persona de el registro sin borrar sus datos
router.delete('/api/categorie/:id')















