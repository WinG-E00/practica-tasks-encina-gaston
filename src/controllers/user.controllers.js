import User from '../models/User.js';
import Task from '../models/Task.js'
import Person from '../models/person.js'

// POST /api/users - Crear un nuevo usuario [4]
export const createUser = async (req, res) => {
    try {
        const { userId, email, password } = req.body;

        //Verificaciones 
        //Necesita validaciones de formato y longitud
        //Verificacion de unicidad

        // Verificación de unicidad del email [2, 3]
        //const existingUser = await User.findOne({ where: { email } });
        //if (existingUser) return res.status(400).json({ message: "El email ya está registrado" });
        // Esto tengo que pasarlo a mi nuevo validador

        const newUser = await User.create({ email, password, userId });
        res.status(201).json({ message: "Usuario creado con éxito", data: newUser }); 


        

        
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario", error: error.message }); // [1, 2]
    }
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////



// GET /api/users - Obtener todos los usuarios
// Relacion de person mostrada en el controlador par traer todos los usuarios
// Mostrar todas las tareas vinculadas a este
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: ['person','tareasAsignadas']
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error: error.message });
    }
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////




// GET /api/users/:id - Obtener un usuario por ID
// con sus tareas tambien....
export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: ['person', 'tareasAsignadas']
        });
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" }); // [2]
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el usuario", error: error.message });
    }
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////





// PUT /api/users/:id - Actualizar usuario
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, newPassword } = req.body;

        await user.update({ name, email, newPassword });
        res.status(200).json({ message: "Usuario actualizado con éxito", data: user });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar usuario", error: error.message });
    }
};


//Prueba...






///////////////////////////////////////////////////////////////////////////////////////////////////////////




// DELETE /api/users/:id - Eliminar usuario [4]
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "Usuario no encontrado para eliminar" }); // [2]

        await user.destroy();
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar usuario", error: error.message });
    }
};

