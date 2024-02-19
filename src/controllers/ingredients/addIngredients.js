import Ingredient from 'models/Ingredients';

const addIngretients = async (req, res, next) => {
  const { title, desc, quantity, thumb } = req.body;
};
try {
  await Ingredient.create({
    title,
    desc,
    quantity,
    thumb,
  });
  return res.status(200).json({ body: `${title} added to ingredients` });
} catch (error) {
  console.log(error.message);
}

export { addIngretients };
