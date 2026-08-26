import { body, ValidationResult } from 'express-validator';




export const validatorPerson = [

    body('name')
        .notEmpy()
        .withMessage('')
        .exist()
        .withMessage('')
        .isString()
        .withMessage('')
        .isLength({max: 350})
        .withMessage('')


];