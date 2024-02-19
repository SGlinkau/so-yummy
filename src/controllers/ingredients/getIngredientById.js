import Ingredient from 'models/Ingredients';

const getIngredientById = async (req, res, next) => {
  const { ingredientId } = req.params;

  try {
    const result = await Ingredient.find({ _id: ingredientId });

    return res.status(200).json({ body: result });
  } catch (error) {
    console.log(error.message);
  }
};

export { getIngredientById };
