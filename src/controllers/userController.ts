import userService from '../services/userService.ts';

async function getUsers(req: any) {
  try {
    const Users = await userService.getUsers();
    return new Response(JSON.stringify(Users), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function getUser(req: any) {
  try {
    const id = req.params.id;
    const User = await userService.getUser(id);
    return new Response(JSON.stringify(User), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function createUser(req: any) {
  try {
    const data = await req.body;
    const newUser = await userService.createUser(data);
    return new Response(JSON.stringify(newUser), { status: 201 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function updateUser(req: any) {
  try {
    const id = req.params.id;
    const data = await req.body;
    const updatedUser = await userService.updateUser(id, data);
    return new Response(JSON.stringify(updatedUser), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function deleteUser(req: any) {
  try {
    const id = req.params.id;
    const deletedUser = await userService.deleteUser(id);
    return new Response(JSON.stringify(deletedUser),  { status: 204 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
