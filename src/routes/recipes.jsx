import express from 'express';

import { getRecipesListMainPage } from 'controllers/mainPageRecipes';

const router = express.Router();

router.get('/home', getRecipesListMainPage);
