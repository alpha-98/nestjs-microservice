import * as Joi from 'joi';

export const envSchema = Joi.object().keys({
  PORT: Joi.number().integer().required(),
  MONGODB_URI: Joi.string().required(),
  MONGODB_DATABASE_NAME: Joi.string().required(),
});
