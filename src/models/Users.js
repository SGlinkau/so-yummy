const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Field name is required'],
    },
    password: {
      type: String,
      required: [true, 'Field password is required'],
    },
    email: {
      type: String,
      required: [true, 'Field email is required'],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default:
        'https://res.cloudinary.com/de4niywwl/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,w_100/v1708030468/cld-sample-4.jpg',
    },
    subscription: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
    favorites: {
      type: Array,
      default: [],
    },
    shoppingList: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: false }
);

userSchema.pre('save', async function (next) {
  if (!this.password) {
    return;
  }

  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = new mongoose.model('users', userSchema);

module.exports = {
  User,
};
