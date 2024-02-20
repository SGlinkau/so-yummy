import mongoose from 'mongoose';

const shoppingListSchema = new mongoose.Schema(
  {
    list: [
      {
        ingredientId: {
          type: SchemaTypes.ObjectId,
          ref: 'ingredient',
          required: [true],
        },
        ingredientQuantity: {
          type: String,
          required: [true],
        },
      },
    ],

    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'users',
      required: [true],
    },
  },
  { versionKey: false, timestamps: true }
);

const ShoppingList = mongoose.model('shopping-list', shoppingListSchema);

export default ShoppingList;
