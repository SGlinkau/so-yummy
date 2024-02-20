import express from 'express';

import { addRecipeIngretient } from 'controllers/recipeIngredients/addRecipeIngredient';
import { getRecipeIngredient } from 'controllers/recipeIngredients/getRecipeIngredient';
import { getRecipeIngredientById } from 'controllers/recipeIngredients/getRecipeIngredientById';
import { deleteRecipeIngredient } from 'controllers/recipeIngredients/deleteRecipeIngredient';

const router = express.Router();

router.get('/recipeIngredients/recipeIngredientsId', getRecipeIngredientById);

router.get('/recipeIngredients', getRecipeIngredient);

router.post('/recipeIngredients', addRecipeIngretient);

router.delete(
  '/recipeIngredients/:recipeIngredientsId',
  deleteRecipeIngredient
);
