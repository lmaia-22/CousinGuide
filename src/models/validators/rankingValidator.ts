import Joi from 'joi';

const rankingSchema = Joi.object({
    ranking: Joi.number().min(0).max(10).required(),
    description: Joi.string().trim().required(),
    restaurantId: Joi.string().trim().required(),
});

function validateRanking(ranking: any) {
  const result = rankingSchema.validate(ranking);
  if (result.error) {
    throw new Error(`Validation Error: ${result.error.message}`);
  }
  return result.value;
}

export default validateRanking;
