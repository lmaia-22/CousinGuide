import userService from '../services/userService.ts';
import validateUser from '../models/validators/userValidator.ts';

async function getUsers(req: any) {
  const Users = await userService.getUsers();
  return new Response(JSON.stringify(Users), { status: 200 }).json();
}

async function getUser(req: any) {
  const id = req.params.id;
  const User = await userService.getUser(id);
  return new Response(JSON.stringify(User), { status: 200 }).json();
}

async function createUser(req: any) {
  const data = await req.body;
  const validatedUser = validateUser(data);
  const newUser = await userService.createUser(validatedUser);
  return new Response(JSON.stringify(newUser), { status: 201 }).json();
}

async function updateUser(req: any) {
  const id = req.params.id;
  const data = await req.body;
  const validatedUser = validateUser(data);
  const updatedUser = await userService.updateUser(id, validatedUser);
  return new Response(JSON.stringify(updatedUser), { status: 200 }).json();
}

async function deleteUser(req: any) {
  const id = req.params.id;
  await userService.deleteUser(id);
  return new Response(null, { status: 204 }).json();
}

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
