import Joi from 'joi';

const bookSchema = Joi.object({
  title: Joi.string().trim().required(),
  author: Joi.string().trim().required(),
  // Add other fields as necessary
});

function validateBook(book: any) {
  const result = bookSchema.validate(book);
  if (result.error) {
    throw new Error(`Validation Error: ${result.error.message}`);
  }
  return result.value;
}

export default validateBook;
