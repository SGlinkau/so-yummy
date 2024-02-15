import express from 'express';

import { getRecipesListMainPage } from 'controllers/recipes/mainPageRecipes';
import { getRecipesById } from 'controllers/recipes/getRecipesById';

const router = express.Router();

router.get('/home', getRecipesListMainPage);

router.get('/recipes/:id', getRecipesById);
