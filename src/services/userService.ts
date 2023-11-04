import userModel from '../models/userModel.ts';
import validateUser from '../models/validators/userValidator.ts';

async function getUsers() {
  return await userModel.findUsers();
}

async function getUser(id: string) {
  return await userModel.findUser(id);
}

async function createUser(data: any) {
  const validatedUser = validateUser(data);
  return await userModel.createUser(validatedUser);
}

async function updateUser(id: string, data: any) {
  const validatedUser = validateUser(data);
  return await userModel.updateUser(id, validatedUser);
}

async function deleteUser(id: string) {
  return await userModel.deleteUser(id);
}

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
