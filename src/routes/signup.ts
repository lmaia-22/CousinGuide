import signupController from '../controllers/signupController';
import Elysia from 'elysia';

const authen = new Elysia()

.post('/signup', signupController.signup)
.post('/login', signupController.login)
.post('/validate', signupController.validate)
.post('/logout', signupController.logout)

export default authen;