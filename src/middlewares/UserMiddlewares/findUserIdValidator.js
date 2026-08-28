import { param, validationResult } from 'express-validator';


const validadorBuscarUsuarioPorId = [
  param('id')
    .isInt()
    .notEmpty()
    .withMessage('El id del usuario debe ser un numero y no puede estar vacio'),

  (req, res, next) => {

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
  }


];

export default validadorBuscarUsuarioPorId;
