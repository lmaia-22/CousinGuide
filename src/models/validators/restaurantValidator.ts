import Joi from 'joi';


const restaurantSchema = Joi.object({
    name: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    locationId: Joi.string().trim().required(),
});

function validateRestaurant(restaurant: any) {
  const result = restaurantSchema.validate(restaurant);
  if (result.error) {
    throw new Error(`Validation Error: ${result.error.message}`);
  }
  return result.value;
}

export default validateRestaurant;