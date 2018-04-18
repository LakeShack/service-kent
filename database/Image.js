/* eslint camelcase: 0 */ // --> OFF
const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;


const imageSchema = new mongoose.Schema({
  id: Number, 
  title: String,
  location: String,
  rating: Number,
  reviewCount: Number,
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

let getImages = (id, callback) => {
  Image.
    findOne({id: id}, function(err, result) {
      if (err) {
        console.log('DATABASE GET ERROR ', err);
      }
    }).
    exec(callback);
};

module.exports.Image = Image;
module.exports.getImages = getImages;
