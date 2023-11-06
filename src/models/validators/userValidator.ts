import Joi from 'joi';

const userSchema = Joi.object({
    username:Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    gender: Joi.string().trim().required(),
    attractedTo: Joi.string().trim().required(),
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
});

function validateUser(user: any) {
  const result = userSchema.validate(user);
  if (result.error) {
    throw new Error(`Validation Error: ${result.error.message}`);
  }
  return result.value;
}

export default validateUser;