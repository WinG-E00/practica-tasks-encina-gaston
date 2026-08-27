import { param, body, validationResult } from 'express-validator';
import User from '../../models/User.js'


export const deleteValidatorUser = [
  param('id')
    .notEmpty()
    .withMessage('El id tiene que estar vacio')
    .isInt()
    .withMessage('el id tiene que ser un int')
    .custom((value, { req }) => {
      const usuarioEncontrado = User.findByPk(id)

      if (!usuarioEncontrado) {
        throw new Error('El usuario tiene que estar en la base de datos')
      }
    }),

  (req, res, next) => {

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
  }

];
