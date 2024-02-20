import RecipeIngredients from 'models/RecipeIngredients';

const deleteRecipeIngredient = async (req, res, next) => {
  const { recipeIngredientId } = req.params;
  try {
    const result = await RecipeIngredients.findOneAndDelete({
      _id: recipeIngredientId,
    });
    if (!result) {
      return res
        .status(404)
        .json({ message: `Cannot find ingredient ${recipeIngredientId}` });
    }
    return res.status(200).json({ body: result });
  } catch (error) {
    console.log(error.message);
  }
};

export { deleteRecipeIngredient };
