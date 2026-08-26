import { body, ValidationResult } from 'express-validator';

const userValidator = [

    body('email')
        .notEmpy()
        .withMessage('el campo email no puede estar vacio')
        .isEmail()
        .withMessage('Debe tener un formato de email valido'),

    body('password')
        .notEmpy()
        .withMessage('La contraseña es obligatoria')
        .isLength({ min: 8, max: 64 })
        .withMessage('La contraseña debe tener entre 8 y 64 caracteres')
        .isStrongPassword({
            minLenght: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols:1
        })
        .withMessage('La contraseña debe contener al menos una mayuscula, una miscula, un numero y un simbolo especial'),


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



