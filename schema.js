// schema.js
// npm install joi           install this to use 

const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().required(),
    img: Joi.string().required(),
    desc: Joi.string().allow('').optional(),
    price: Joi.string().min(0).required(),
});

const reviewSchema = Joi.object({
    rating: Joi.string().min(0).max(5).required(),
    comment: Joi.string().required(),
});

module.exports = { productSchema, reviewSchema };

