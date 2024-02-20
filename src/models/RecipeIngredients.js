const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const recipeIngredientsSchema = new Schema({
  ingredient: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'ingredient',
    required: [true, 'Ingredient is required'],
  },
  recipe: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'recipe',
    required: [true, 'Recipe is required'],
  },
  quantity: {
    type: Number,
    default: 1,
  },
  units: {
    type: String,
    default: '',
  },
});

const RecipeIngredients = mongoose.model(
  'recipeIngredient',
  recipeIngredientsSchema,
  'recipeIngredients'
);

export default RecipeIngredients;
