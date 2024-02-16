import Recipe from 'models/Recipe';

const addUserRecipe = async (req, res, next) => {
  const { id } = req.user;
  const {
    title,
    category,
    instructions,
    description,
    thumb,
    time,
    ingredients,
  } = req.body;
  try {
    await Recipe.create({
      owner: id,
      title,
      category,
      instructions,
      description,
      thumb,
      time,
      ingredients,
    });
    return res
      .status(200)
      .json({ status: 200, body: `${title} added to ${id} recipes` });
  } catch (err) {
    console.log('Error during processing: ', err.message);
  }
};

export { addUserRecipe };
