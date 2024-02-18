import Recipe from 'models/Recipe';
const getRecipesListMainPage = async (req, res, next) => {
  const { categories } = req.body;
  try {
    const recipesList = await Recipe.find({ category: categories });

    if (!recipesList) {
      return res.status(404).json({ message: 'Categories not found' });
    }
    return res.status(200).json({ status: 200, body: recipesList });
  } catch (err) {
    console.log('List not loaded', err.message);
  }
};

export { getRecipesListMainPage };
