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
  shared: Boolean,
  image: {
    living_room: String,
    bedroom: String,
    dining_room: String,
    den: String
  },
  descriptions: {
    living_room: String,
    bedroom: String,
    dining_room: String,
    den: String
  }
});

const Image = mongoose.model('Image', imageSchema);

let getImages = (id, callback) => {
  Image.
    findOne({ id: id }, function (err, result) {
      if (err) {
        console.log('DATABASE GET ERROR ', err);
      }
    }).
    exec(callback);
};

let patchImageSave = (id, callback) => {
  Image.findOneAndUpdate({ id: id },
    { $set: { saved: true } },
    { new: true },
    callback);
};

let patchImageUnsave = (id, callback) => {
  Image.findOneAndUpdate({ id: id },
    { $set: { saved: false } },
    { new: true },
    callback);
};

let patchImageShare = (id, callback) => {
  Image.findOneAndUpdate({ id: id },
    { $set: { shared: true } },
    { new: true },
    callback);
};

module.exports.Image = Image;
module.exports.getImages = getImages;
module.exports.patchImageSave = patchImageSave;
module.exports.patchImageUnsave = patchImageUnsave;
module.exports.patchImageShare = patchImageShare;
