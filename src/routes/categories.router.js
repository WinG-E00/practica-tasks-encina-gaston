import express from 'express';
//Aca tengo que importar mi controlador
import { createTaskCategories } from '';


const router =  express.router();

//Aca va el controlador...
router.post('/api/post/categories', createTaskCategories );








