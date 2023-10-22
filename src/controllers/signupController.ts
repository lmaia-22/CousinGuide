import signupService from '../services/signupService.ts';

async function signup(req: any) {
  const user = await signupService.signup();
  return new Response(JSON.stringify(user), { status: 200 });
}