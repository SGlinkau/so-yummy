import Recipe from 'models/Recipe';

const deleteUserRecipe = async (req, res, next) => {
  const { id } = req.user;
  const { recipeId } = req.params;
  try {
    const result = await Recipe.findOneAndDelete({ owner: id, _id: recipeId });
    if (!result) {
      return res
        .status(404)
        .json({ message: `Cannot find recipe ${recipeId} for ${id}` });
    }
    return res.status(200).json({ status: 200, body: result });
  } catch (err) {
    console.log('Error during processing: ', err.message);
  }
};

export { deleteUserRecipe };
