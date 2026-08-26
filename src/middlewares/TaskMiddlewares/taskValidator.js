import { body, ValidationResult } from 'express-validator';



export const createdTaskValidator = [
    
    // verificaciones
    body('title')
    .isString()
    .withMessage('El parametro debe ser un string')
    .isLength({min: 1, max: 300})
    .withMessage('La longitud de el titulo de la tarea debe ser como minimo 1 y como maximo 300 caracteres'),

    
    body('description')
        .isString()
        .withMessage('La descripcion debe ser un string')
        .isLength({ min: 1, max: 3000 })
        .withMessage('la longitud minima de la descripcion es de 1 y el maximo 3000 caracteres'),

    body('isComplete')
        .notEmpty()
        .isBoolean()
        .withMessage('Tiene que ser un booleano'),
        
    
    body('categoryId')
        .optional()
        .isInt()
        .withMessage('El usuario id debe de ser un numero...'),


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






