import RecipeIngredients from 'models/RecipeIngredients';
import Ingredient from 'models/Ingredients';

const addRecipeIngretient = async (req, res, next) => {
  const { ingredientId, recipeId, quantity, units } = req.body;
};
try {
  const ingredient = Ingredient.find({ _id: ingredientId });
  const recipe = Ingredient.find({ _id: recipeId });
  await RecipeIngredients.create({
    ingredient,
    recipe,
    quantity,
    units,
  });
  return res
    .status(200)
    .json({ body: `${ingredient} added to recipe ingredient` });
} catch (error) {
  console.log(error.message);
}

export { addRecipeIngretient };
