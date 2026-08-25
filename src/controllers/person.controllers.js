// Importaciones de modelos para poder usar el include
import Person from '../models/person.js';
import Task from '../models/Task.js'
import User from '../models/User.js'



export const ObtenerRegistrosYRelaciones = async (req, res) => {

    try {
        const datosPerson = await Person.findAll({ 
        include: [{
         model: User,
         as: 'user',
         attributes: ['id','email'],
         include: [{
            model: Task,
            as: 'tareasAsignadas',
            attributes: ['id','title','description','isComplete']
         }]
    } ] })

    res.status(200).json(datosPerson);

    } catch(err) {
        res.status(500).json({ message: "Error al obtener person", error: error.message });
    }


    

    //Me falta el try catch con los mensajes de respuesta


};




// controlador para añadir una persona pero que se necesiten los otros campos

export const insertPerson = async (req, res) => {

    try {

        const { email, password, name  } = req.body;


        // se supone que este es el metedo
    

        //Como se crea un nuevo registro con todas las relaciones
        const nuevaPersona = Person.create({
            // no puedo poner el mismo nombre de mi variable....
            email,
            password,
            person:  name 
        }, {
            include: [{
                model: Person,
                as: 'person'
            }]
        }  )


    } catch(err) {

    }


};
