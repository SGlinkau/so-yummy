import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    area: {
      type: String,
    },
    instructions: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Title is required'],
    },
    thumb: {
      type: String,
      required: [true, 'Title is required'],
    },
    preview: String,
    time: {
      type: String,
      required: [true, 'Title is required'],
    },
    favorites: {
      type: Array,
      default: [],
    },
    youtube: String,
    tags: [String],
    ingredients: [
      {
        id: {
          type: mongoose.Types.ObjectId,
          ref: 'ingredient',
        },
        measure: {
          type: String,
          required: [true, 'Measure is required'],
        },
        _id: false,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Recipe = mongoose.model('recipe', recipeSchema, 'recipes');

export default Recipe;
