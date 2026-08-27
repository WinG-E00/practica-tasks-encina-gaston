import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/user.controllers.js';
import { userValidator } from '../middlewares/UserMiddlewares/userValidator.js'
import validadorBuscarUsuarioPorId from '../middlewares/UserMiddlewares/findUserIdValidator.js';
import { validatorUpdateUser } from '../middlewares/UserMiddlewares/updateUserValidator.js'
import { deleteValidatorUser } from '../middlewares/UserMiddlewares/deleteUserValidator.js'
const router = express.Router();

router.post('/api/users', userValidator ,createUser);
// Para crear user tiene que haber person supongo



router.get('/api/users', getAllUsers);
// supongo que al momento de hacer el get te traiga tambien el person

//Router con validador ya echo
router.get('/api/users/:id', validadorBuscarUsuarioPorId, getUserById);
//te trae el usuario por id


//
router.put('/api/users/:id', validatorUpdateUser , updateUser);



router.delete('/api/users/:id',deleteValidatorUser ,deleteUser);
// cuando hagas delete a el user este tambien borrara la person y sus tasks


export default router;
