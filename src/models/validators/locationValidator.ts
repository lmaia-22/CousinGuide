import Joi from 'joi';

const locationSchema = Joi.object({
    district:Joi.string().trim().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    restaurantId: Joi.object(),
});

function validateLocation(location: any) {
  const result = locationSchema.validate(location);
  if (result.error) {
    throw new Error(`Validation Error: ${result.error.message}`);
  }
  return result.value;
}

export default validateLocation;
