import { param, body, validationResult } from 'express-validator';
import Task from '../../models/Task.js';

const taskDeleteValidator = [

  param('id').
    isInt()
    .withMessage('Debe ser un entero')
    .custom((value, { req, param }) => {

      const task = Task.findByPk(req.param.id);

      if (!task) {
        throw new Error('La tarea debe existir en la base de datos...')
      }

    }),

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
