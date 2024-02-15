import Recipe from 'models/Recipe';

const getRecipesByCategory = async (req, res, next) => {
  try {
    const category = await req.params.category;
    const recipesByCategory = await Recipe.find({ category: category }).limit(
      8
    );
    if (!recipesByCategory) {
      return res
        .status(404)
        .json({ message: `Recipes in category ${category} not found` });
    }
    return res.status(200).json({ status: 200, body: recipesByCategory });
  } catch (err) {
    console.log('Error during processing: ', err.message);
  }
};

export { getRecipesByCategory };
