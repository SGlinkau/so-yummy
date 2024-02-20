import ShoppingList from 'models/ShoppingList';

const getShoppingList = async (req, res, next) => {
  try {
    const userId = await req.user;
    const shoppingList = await ShoppingList.findOne({ owner: userId });
    if (!shoppingList) {
      return res
        .status(404)
        .json({ message: 'User does not have shopping list' });
    }
    return res.status(200).json({ status: 200, body: shoppingList });
  } catch (err) {
    console.log('Error during processing: ', err.message);
  }
};

export { getShoppingList };
