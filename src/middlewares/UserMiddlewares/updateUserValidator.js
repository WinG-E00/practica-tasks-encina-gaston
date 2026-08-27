import { param, body, validationResult } from 'express-validator';
import User from '../../models/User.js'



export const validatorUpdateUser = [
  param('id')
    .isInt()
    .withMessage('El ID debe ser un número entero'),
  body('email')
    .notEmpty()
    .isEmail()
    .withMessage('El email tiene que tener un formato valido')
    .custom(async (value, { req }) => {

      const usuarioEncontrado = await User.findByPk(req.params.id)

      const emailEnUso = await User.findOne({
        where: {
          email: req.body.email
        }
      })

      if (!emailEnUso) {
        throw new Error('El email ya esta en uso')
      }

    } )
  ,
  body('newPassword')
    .notEmpty()
    .withMessage('La contraseña no puede estar vacia')
    .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    .withMessage('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.')
  ,
  body('password')
    .notEmpty()
    .withMessage('La contraseña no puede estar vacia')
    .custom(async (value, { req }) => {
      const usuarioId = req.params.id;

      const usuarioOriginal = await

        User.findById(usuarioId)

      if (!usuarioOriginal) {
        throw new Error('Usuario No encontrado')
      }

      return true

    } ),


  (req, res, next) => {

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
  }

];
