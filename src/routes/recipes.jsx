import express from 'express';

import { getRecipesListMainPage } from 'controllers/recipes/mainPageRecipes';

const router = express.Router();

router.get('/home', getRecipesListMainPage);
