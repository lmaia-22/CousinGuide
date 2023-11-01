import userController from '../controllers/userController.ts';
import Elysia from 'elysia';

const users = new Elysia()
.get('/', userController.getUsers)
.get('/:id', userController.getUser)
.post('/', userController.createUser)
.put('/:id', userController.updateUser)
.delete('/:id', userController.deleteUser)

export default users;

