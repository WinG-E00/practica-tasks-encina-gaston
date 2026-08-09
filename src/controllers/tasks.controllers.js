import Task from '../models/Task.js';

// POST /api/tasks - Añadir una nueva tarea
export const createTask = async (req, res) => {
    try {
        const { title, description, isComplete } = req.body;

        // Validaciones de datos
        if (!title || !description) return res.status(400).json({ message: "Título y descripción son obligatorios" });
        if (title.length > 100 || description.length > 100) {
            return res.status(400).json({ message: "Máximo 100 caracteres permitidos" });
        }

        // Verificación de unicidad del título
        const existingTask = await Task.findOne({ where: { title } });
        if (existingTask) return res.status(400).json({ message: "Ya existe una tarea con ese título" });

        const newTask = await Task.create({ title, description, isComplete });
        res.status(201).json({ message: "Tarea creada con éxito", data: newTask }); // [2]
    } catch (error) {
        res.status(500).json({ message: "Error al crear la tarea", error: error.message }); // [1]
    }
};

// GET /api/tasks - Obtener todas las tareas
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener tareas", error: error.message });
    }
};

// GET /api/tasks/:id - Obtener una tarea por ID
export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la tarea", error: error.message });
    }
};

// PUT /api/tasks/:id - Actualizar tarea 
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, isComplete } = req.body;

        // Verificación de existencia previa
        const task = await Task.findByPk(id);
        if (!task) return res.status(404).json({ message: "Tarea no encontrada para editar" });

        // Verificación de unicidad del título si se intenta cambiar
        if (title && title !== task.title) {
            const titleCheck = await Task.findOne({ where: { title } });
            if (titleCheck) return res.status(400).json({ message: "El nuevo título ya existe" });
        }

        await task.update({ title, description, isComplete });
        res.status(200).json({ message: "Tarea actualizada con éxito", data: task });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la tarea", error: error.message });
    }
};

// DELETE /api/tasks/:id - Eliminar tarea
export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ message: "Tarea no encontrada para eliminar" }); // [2]

        await task.destroy();
        res.status(200).json({ message: "Tarea eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarea", error: error.message });
    }
};