import Categories from '../models/tasksCategories.js';
import Task from '../models/Task.js';



export const createTaskCategories = async (req, res) => {
    try {
    
        const { title, description, isComplete, categoryId } = req.body;



        const newTask = await Task.create({ title, description, isComplete });
        console.log("Se creo la tarea con una categoria")


        await newtask.addCategory(categoryId)
        


        

        return res.status(201).json({
            message:"tarea con categoria asociada creada"
        })


    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

};




/*

    {
    tittle: "Titulo de la tarea",
    description: "La tarea de prueba",
    isComplete: "No",



    }

*/


