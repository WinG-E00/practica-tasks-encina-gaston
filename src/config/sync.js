import sequelize from './database.js';

//person model
import '../models/person.js';
//user model
import '../models/User.js';
//Tasks model
import '../models/Task.js';
//categories model
import '../models/categories.js';
//takscategories model
import '../models/tasksCategories.js';
//relaciones
import '../models/relaciones/relations.js';




export async function initModels(){
    try {
        await sequelize.authenticate();
        console.log('DB connected')

        await sequelize.sync({ force: true }); // o { force: true } en pruebas
        console.log('Modelos sincronizados');
        
    } catch(err){
        console.log('Db init error', err);
        throw err;
    }
}


