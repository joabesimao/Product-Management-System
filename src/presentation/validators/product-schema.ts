import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(10).max(1000).required(),
  price: Joi.number().greater(0).required(),
  stock: Joi.number().min(0).required(),
  category: Joi.string().required(),
  status: Joi.boolean().required(),
});
