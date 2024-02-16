const { model, Schema } = require('mongoose');

const ingredientSchema = Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minlength: 3,
    },
    desc: {
      type: String,
      required: [true, 'Description is required'],
    },
    quantity: {
      type: String,
      default: '',
    },
    thumb: {
      type: String,
      default:
        'https://res.cloudinary.com/de4niywwl/image/upload/c_pad,w_300/v1708030460/samples/breakfast.jpg',
    },
  },
  { versionKey: false, timestamps: true }
);

const Ingredient = model('ingredient', ingredientSchema);

module.exports = {
  Ingredient,
};
