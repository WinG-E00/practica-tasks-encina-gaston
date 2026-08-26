import express from 'express';
//Aca tengo que importar mi controlador
import { createTaskCategories, createCategorie } from '';
import { validatorCrearCategoria } from '../middlewares/categoriesMiddlewares/categoriesValidator.js';


const router =  express.router();

//Aca va el controlador para crear una tarea asociada a task
router.post('/api/post/create_task_category', createTaskCategories );


//Aca tengo que crear el controlador para poder crear la categorie
router.post('/api/create/categorie', validatorCrearCategoria,createCategorie);













