import Recipe from 'models/Recipe';

const getRecipesById = async (req, res, next) => {
  try {
    const recipeId = await req.params.recipeId;
    const recipe = await Recipe.findOne({ _id: recipeId });
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe ID not found' });
    }
    return res.status(200).json({ status: 200, body: recipe });
  } catch (err) {
    console.log('Error during processing: ', err.message);
  }
};

export { getRecipesById };
