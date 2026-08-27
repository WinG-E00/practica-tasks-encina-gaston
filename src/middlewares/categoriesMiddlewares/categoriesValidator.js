import { body, validationResult } from 'express-validator';

const controladoruno = [Error, funcion]

//Validador para verifcar que la categoria sea un string y no tenga mas de 100 caracteres
export const validatorCrearCategoria = [


    body('categoryType')
        .isString()
        .isLength({ max: 100 }).withMessage('El nombre de la categoria debe ser un string y debe tener menos de 100 caracteres'),

    
    (req, res, next ) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                succes: false,
                errors: errors.array()
            });
        }
        next();
    
    }

];





/*
export const validatorCrearCategorie = [

    // Se supone que aca van primero las validaciones
    body('laclave-valor-de-tu-json')
        .notEmpy()
        .withMessage('Aca va a el mensaje que va a responder')
        .isString()
        .withMessage('El otro mensaje que tiene que responder si la validacion no es correcta'),


    //Okey entonces luego de eso el json se guarda en la posiicon uno del array con las validaciones ya echas

    (req,res,next) => {


        if (!errors.isEmpty()){
            return res.status(400).json({
                succes: false,
                errors: errors.array()
            });
        }

        next()


    }





]

*/