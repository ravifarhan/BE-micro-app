import Joi from "joi";

export const ArticlesValidator = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  userId: Joi.number().required()

})