import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/user.controllers.js';

const router = express.Router();

router.post('/', createUser);
// Para crear user tiene que haber person supongo

router.get('/', getAllUsers);
// supongo que al momento de hacer el get te traiga tambien el person

router.get('/:id', getUserById);
//te trae el usuario por id


router.put('/:id', updateUser);



router.delete('/:id', deleteUser);
// cuando hagas delete a el user este tambien borrara la person y sus tasks
z

export default router;
