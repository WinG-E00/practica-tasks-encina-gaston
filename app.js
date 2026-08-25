//Importaciones
import 'dotenv/config';
import express from "express";
import sequelize from "./src/config/database.js";
import userRouter from './src/routes/user.routes.js';
import taskRouter from './src/routes/tasks.router.js';

import { initModels } from './src/config/sync.js'

const app = express();
const PORT = process.env.APP_PORT || 3000;

// configuracion de app
app.use(express.json());

// Configuracion de routers

app.use(userRouter);
app.use(taskRouter);



app.get('/test', (req, res) => {
  res.send('OK');
});



async function startServer(){

    try {
       

        await initModels()

        app.listen(PORT, () => {
            console.log(`El servidor se ha iniciado en el puerto ${PORT}`);
        });



    } catch(error){
        console.error('Error al conectar con la base de datos', error)
    }
    
}

//Iniciar la funcion asincrona que permite la conexion
startServer()





