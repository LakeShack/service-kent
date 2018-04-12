/* eslint camelcase: 0 */  // --> OFF
const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;


const imageSchema = new mongoose.Schema({
  title: String,
  location: String,
  rating: Number,
  saved: Boolean,
  shared: {
    facebook: Boolean,
    twitter: Boolean,
    email: Boolean
  },
  image: {
    living_room: String,
    bedroom: String, 
    dining_room: String,
    den: String
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports.Image = Image;