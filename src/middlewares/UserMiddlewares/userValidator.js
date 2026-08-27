import { body, validationResult } from 'express-validator';
import Person from '../../models/person.js';



export const userValidator = [

  body('usuarioId')
    .notEmpty()
    .withMessage('El usuario id no puede estar vacio')
    .isInt()
    .withMessage('El id tiene que ser un numero')
    .custom(async (valor) => {
      const personaEncontrada = Person.findByPk(valor);

      if (!personaEncontrada) {
        throw new Error('La persona con ese id no esta en la base de datos')
      }
      return true;
    } )
  ,
    body('email')
        .notEmpty()
        .withMessage('el campo email no puede estar vacio')
        .isEmail()
        .withMessage('Debe tener un formato de email valido'),

    body('password')
        .notEmpty()
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
