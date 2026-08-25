import User from '../models/User.js';
import Task from '../models/Task.js'
import Person from '../models/person.js'

// POST /api/users - Crear un nuevo usuario [4]
export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validaciones de formato y longitud [3, 5]
        if (!name || !email || !password) return res.status(400).json({ message: "Todos los campos son obligatorios" });
        if (name.length > 100 || email.length > 100 || password.length > 100) {
            return res.status(400).json({ message: "Los campos no deben superar los 100 caracteres" });
        }

        // Verificación de unicidad del email [2, 3]
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: "El email ya está registrado" });

        const newUser = await User.create({ name, email, password });
        res.status(201).json({ message: "Usuario creado con éxito", data: newUser }); 

        
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario", error: error.message }); // [1, 2]
    }
};

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



// PUT /api/users/:id - Actualizar usuario [4]
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        // Verificación de existencia previa [2]
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: "Usuario no encontrado para actualizar" });

        // Verificación de unicidad si el email cambia [2, 3]
        if (email && email !== user.email) {
            const emailCheck = await User.findOne({ where: { email } });
            if (emailCheck) return res.status(400).json({ message: "El nuevo email ya está en uso" });
        }

        await user.update({ name, email, password });
        res.status(200).json({ message: "Usuario actualizado con éxito", data: user });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar usuario", error: error.message });
    }
};

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