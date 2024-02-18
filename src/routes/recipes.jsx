import express from 'express';

import { getRecipesListMainPage } from 'controllers/recipes/mainPageRecipes';
import { getRecipesById } from 'controllers/recipes/getRecipesById';
import { getRecipesByCategory } from 'controllers/recipes/getRecipesByCategory';
import { getPopularRecipes } from 'controllers/recipes/getPopularRecipes';

const router = express.Router();

router.get('/home', getRecipesListMainPage);

router.get('/recipes/:id', getRecipesById);

router.get('/recipes/categories/:category', getRecipesByCategory);

router.get('/popular-recipe', getPopularRecipes);

export { router };
