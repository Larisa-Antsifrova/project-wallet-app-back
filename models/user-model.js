const { Schema, model } = require('mongoose');
const { v4: uuid } = require('uuid');

const userSchema = new Schema({
  name: { type: String, default: 'Awesome Guest' },
  password: { type: String, required: [true, 'Password is required.'] },
  email: { type: String, required: [true, 'Email is required.'], unique: true },
  refreshToken: {
    type: String,
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verification token is required'],
    default: uuid(),
  },
});

const User = model('user', userSchema);

module.exports = User;
