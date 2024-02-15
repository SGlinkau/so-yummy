import Recipe from "models/Recipe";
const getRecipesListMainPage = async (req, res, next) => {
  const { categories } = req.body;
  try {
    recipesList = await Recipe.find({ category: categories });
    return res.status(200).json({ status: 200, body: recipesList });
  } catch (err) {
    console.log('List not loaded', err.message);
  }
};

export { getRecipesListMainPage };