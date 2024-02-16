import Recipe from 'models/Recipe';

const getUserRecipes = async (req, res, next) => {
  const { id } = req.user;
  const { page = '1' } = req.params;
  try {
    const result = await Recipe.find({ owner: id })
      .limit(8)
      .skip((parseInt(page) - 1) * 8);
    if (result.lenght === 0) {
      return res
        .status(404)
        .json({ message: `No recipes found for user with ID ${id}` });
    }
    return res.status(200).json({ status: 200, body: result });
  } catch (err) {
    console.log('Error during processing: ', err.message);
  }
};

export { getUserRecipes };
