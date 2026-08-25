import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/user.controllers.js';

const router = express.Router();

router.post('/api/users', createUser);
// Para crear user tiene que haber person supongo

router.get('/api/users', getAllUsers);
// supongo que al momento de hacer el get te traiga tambien el person

router.get('/api/users/:id', getUserById);
//te trae el usuario por id


router.put('/api/users/:id', updateUser);



router.delete('/api/users/:id', deleteUser);
// cuando hagas delete a el user este tambien borrara la person y sus tasks


export default router;
