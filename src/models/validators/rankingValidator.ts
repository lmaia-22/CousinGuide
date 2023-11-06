import Joi from 'joi';

const rankingSchema = Joi.object({
    ranking: Joi.number().required(),
    description: Joi.string().trim().required(),
    restaurantId: Joi.string().trim().required()
});

function validateLocation(ranking: any) {
  const result = rankingSchema.validate(ranking);
  if (result.error) {
    throw new Error(`Validation Error: ${result.error.message}`);
  }
  return result.value;
}

export default validateLocation;
