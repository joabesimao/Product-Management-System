import Joi from 'joi';

export const signupSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  category: Joi.string().min(3).required(),
  status: Joi.boolean().required(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().min(3),
  description: Joi.string().min(10),
  price: Joi.number().positive(),
  stock: Joi.number().integer().min(0),
  category: Joi.string().min(3),
  status: Joi.boolean(),
});
