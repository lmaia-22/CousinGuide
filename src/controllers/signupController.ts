import signupService from '../services/signupService.ts';

async function signup(req: any) {
  const user = await signupService.signup();
  return new Response(JSON.stringify(user), { status: 200 });
}

async function login(req: any) {
  const user = await signupService.signup();
  return new Response(JSON.stringify(user), { status: 200 });
}

async function validate(req: any) {
  const user = await signupService.signup();
  return new Response(JSON.stringify(user), { status: 200 });
}

async function logout(req: any) {
  const user = await signupService.signup();
  return new Response(JSON.stringify(user), { status: 200 });
}


export default {
  signup,
  login,
  validate,
  logout
};