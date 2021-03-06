const { Schema, model } = require('mongoose');
const { v4: uuid } = require("uuid");

const userSchema = new Schema(
  {
    name: { type: String, trim: true, default: 'Awesome Guest' },
    password: {
      type: String,
      trim: true,
      required: [true, 'Password is required.']
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: [true, 'Email is required.']
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    activationLink: {
      type: String,
      default: uuid(),
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const UserModel = model('user', userSchema);

module.exports = UserModel;
