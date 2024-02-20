import RecipeIngredients from 'models/RecipeIngredients';

const getRecipeIngredient = async (req, res, next) => {
  const { page = '1' } = req.params;
  try {
    const result = await RecipeIngredients.find({})
      .limit(8)
      .skip((parseInt(page) - 1) * 8);

    return res.status(200).json({ body: result });
  } catch (error) {
    console.log(error.message);
  }
};

export { getRecipeIngredient };
