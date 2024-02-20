import RecipeIngredients from 'models/RecipeIngredients';

const getRecipeIngredientById = async (req, res, next) => {
  const { recipeIngredientId } = req.params;

  try {
    const result = await RecipeIngredients.find({ _id: recipeIngredientId });

    return res.status(200).json({ body: result });
  } catch (error) {
    console.log(error.message);
  }
};

export { getRecipeIngredientById };
