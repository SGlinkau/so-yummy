import express from 'express';

import { addIngretients } from 'controllers/ingredients/addIngredients';
import { getIngredients } from 'controllers/ingredients/getIngredients';
import { getIngredientById } from 'controllers/ingredients/getIngredientById';
import { deleteIngredient } from 'controllers/ingredients/deleteIngredients';

const router = express.Router();

router.get('/ingredientsId', getIngredientById);
router.get('/', getIngredients);

router.post('/', addIngretients);

router.delete('/:ingredientsId', deleteIngredient);
