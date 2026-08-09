//Importaciones
import 'dotenv/config';
import express from "express";
import sequelize from "./src/config/database.js";
import userRouter from './src/routes/user.routes.js';
import taskRouter from './src/routes/tasks.router.js';

const app = express();
const PORT = process.env.APP_PORT || 3000;

// configuracion de app
app.use(express.json());

app.get('/test', (req, res) => {
  res.send('OK');
});

// Routers
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);








async function startServer(){

    try {
        await sequelize.authenticate();
        console.log('Conexion exitosa');

        await sequelize.sync({ force: false });
        console.log('Sincronizacion con la base de datos');

        app.listen(PORT, () => {
            console.log(`El servidor se ha iniciado en el puerto ${PORT}`);
        });



    } catch(error){
        console.error('Error al conectar con la base de datos', error)
    }
    
}

//Iniciar la funcion asincrona que permite la conexion
startServer()





