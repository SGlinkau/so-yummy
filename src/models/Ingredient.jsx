import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    thumb: {
      type: String,
      default:
        'https://res.cloudinary.com/de4niywwl/image/upload/c_pad,w_300/v1708030460/samples/breakfast.jpg',
    },
  },
  { versionKey: false, timestamps: true }
);

const Ingredient = mongoose.model(
  'ingredient',
  ingredientSchema,
  'ingredients'
);

export default Ingredient;
