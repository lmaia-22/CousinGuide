import userModel from '../models/userModel.ts';

async function signup() {
  return await userModel.signup();
}


export default {
  signup
}