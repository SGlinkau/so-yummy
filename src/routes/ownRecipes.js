import express from 'express';

import { getUserRecipes } from '../controllers/ownRecipes/getUserRecipes';
import { addUserRecipe } from '../controllers/ownRecipes/addUserRecipe';
import { deleteUserRecipe } from '../controllers/ownRecipes/deleteUserRecipe';

const router = express.Router();

router.get('/', getUserRecipes);

router.post('/', addUserRecipe);

router.delete('/:recipeId', deleteUserRecipe);
