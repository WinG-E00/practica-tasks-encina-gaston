import express from 'express';

import { ObtenerRegistrosYRelaciones } from '../controllers/person.controllers.js'



const router = express.router();
// Rutas


//GET obtener todos los registros de person incluidos sus registros relacionados con informacion que es solo crucial

router.get('/api/person', ObtenerRegistrosYRelaciones )


// POST añadir una persona pero con las validaciones necesarias para que se necesite crear un usuario

router.post('/api/person',  )

