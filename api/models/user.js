const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  testImage: {
    type: Object,
    required: false
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  birthday: {
      type: String,
      reqired: true
  },
  repeat_password: {
      type: String,
      required: true
  },
  image: {
    type: String,
    required: false
},

}, { timestamps: true });

module.exports = mongoose.model('user', userSchema)