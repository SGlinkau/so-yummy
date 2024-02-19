import Ingredient from 'models/Ingredients';

const deleteIngredient = async (req, res, next) => {
  const { ingredientId } = req.params;
  try {
    const result = await Ingredient.findOneAndDelete({ _id: ingredientId });
    if (!result) {
      return res
        .status(404)
        .json({ message: `Cannot find ingredient ${ingredientId}` });
    }
    return res.status(200).json({ body: result });
  } catch (error) {
    console.log(error.message);
  }
};

export { deleteIngredient };
