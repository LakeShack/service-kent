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

let getImages = (redis, saveRequest, id, callback) => {
  redis.get(id, function (err, reply) {
    if (err) { 
      callback(null); 
    } else if (reply && !saveRequest) {
      callback(JSON.parse(reply));
    } else {
      Image.
        findOne({ id: id }, function (err, result) {
          if (err) {
            console.log('DATABASE GET ERROR ', err);
            return;
          } else {
            redis.set(id, JSON.stringify(result), () => callback(result));
          }
        });
    }
  });
};

let patchImageShare = (id, callback) => {
  Image.findOneAndUpdate({ id: id },
    { $set: { shared: true } },
    { new: true },
    callback);
};

module.exports.Image = Image;
module.exports.getImages = getImages;
module.exports.patchImageShare = patchImageShare;
