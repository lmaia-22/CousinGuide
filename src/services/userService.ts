import userModel from '../models/userModel.ts';

async function getUsers() {
  return await userModel.findUsers();
}

async function getUser(id: string) {
  return await userModel.findUser(id);
}

async function createUser(data: any) {
  return await userModel.createUser(data);
}

async function updateUser(id: string, data: any) {
  return await userModel.updateUser(id, data);
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
