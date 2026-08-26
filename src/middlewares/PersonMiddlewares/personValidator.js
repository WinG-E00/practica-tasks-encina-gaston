import { body, ValidationResult } from 'express-validator';




export const validatorPerson = [

    body('name')
        .notEmpy()
        .withMessage('El name no puede estar vacio')
        .exist()
        .withMessage('El name tiene que existir')
        .isString()
        .withMessage('el name tiene que ser un string')
        .isLength({max: 350})
        .withMessage('El name no puede tener mas de 350 caracteres'),


        (req,res, next ) => {

            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({
                    succes:false,
                    errors: errors.array()
                })

            };

            next();

        }




];