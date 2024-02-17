import Recipe from 'models/Recipe';

const getPopularRecipes = async (req, res, next) => {
  try {
    const recipeList = await Recipe.find({});
    if (!recipeList) {
      return res.status(404).json({ message: 'Popular recipes not found' });
    }
    const popularRecipes = recipeList
      .sort((a, b) => b.favorites.length - a.favorites.length)
      .slice(0, 5);
    return res.status(200).json({ status: 200, body: popularRecipes });
  } catch (err) {
    console.log('Error during processing: ', err.message);
  }
};

export { getPopularRecipes };
