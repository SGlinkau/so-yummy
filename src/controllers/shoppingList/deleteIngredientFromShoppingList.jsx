import ShoppingList from 'models/ShoppingList';

const deleteIngredientFromShoppingList = async (req, res, next) => {
  try {
    const userId = await req.user;
    const { id } = req.body;

    const result = await ShoppingList.findOneAndUpdate(
      { owner: userId, 'list._id': id },
      {
        $pull: {
          list: { _id: id },
        },
      },
      { new: true }
    );

    if (!result) {
      return res
        .status(404)
        .json({ message: 'Could not delete ingredient from list' });
    }

    return res.status(200).json({
      code: 200,
      data: {
        result,
      },
    });
  } catch (err) {
    console.log('Error during processing: ', err.message);
  }
};

export { deleteIngredientFromShoppingList };
