import ShoppingList from 'models/ShoppingList';
import Ingredient from 'models/Ingredient';

const addIngredientToShoppingList = async (req, res, next) => {
  try {
    const userId = await req.user;
    const { ingredientId, ingredientQuantity } = req.body;

    const isIngredient = await Ingredient.findOne({ _id: ingredientId });
    if (!isIngredient) {
      return res.status(404).json({ message: 'Ingredient not found' });
    }
    const result = await ShoppingList.findOneAndUpdate(
      { owner: userId },
      {
        $push: {
          list: {
            ingredientId,
            ingredientQuantity,
          },
        },
      },
      { upsert: true, new: true, projection: { list: { $slice: -1 } } }
    ).populate('list.ingredientId', { ttl: 1, thb: 1 });

    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  } catch (err) {
    console.log('Error during processing: ', err.message);
  }
};

export { addIngredientToShoppingList };
