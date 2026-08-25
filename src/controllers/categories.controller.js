import Categories from '../models/categories.js';



export const createCategorie = async (req, res) => {

    try {

        const { categoryType } = req.body;
        
        //
        const newCategory = await Categories.create({ categoryType });

        return res.status().json({
            message: "Categoria creada con exito",
            data: newCategory
        })



    } catch(error){
        return res.status(500).json({
            message: "Error al crear la categoria",
            error: error.message
        });
    }


};