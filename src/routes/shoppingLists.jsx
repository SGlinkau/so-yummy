import express from 'express';

import { getShoppingList } from 'controllers/shoppingLists/getShoppingList';
import { addIngredientToShoppingList } from 'controllers/shoppingLists/addToShoppingList';
import { deleteIngredientFromShoppingList } from 'controllers/shoppingLists/deleteFromShoppingList';

const shoppingListRouter = express.Router();

shoppingListRouter.get('/shopping-list', getShoppingList);

shoppingListRouter.post('/shopping-list', addIngredientToShoppingList);

shoppingListRouter.delete(
  '/shopping-list/:ingredientId',
  deleteIngredientFromShoppingList
);

export { shoppingListRouter };
