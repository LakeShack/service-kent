/* eslint-disable */
const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');
const image = require('./image.js');

//create document for each image
var imageDataCreater = function () {

  var resultArr = [];

  for(var i = 1; i < 101; i++){
    resultArr.push({
        id: i,
        title: 'Relax in the comfort of '+ faker.address.streetName(),
        location: faker.address.city(),
        rating: (Math.floor(Math.random()*2)+3),
        saved: false,
        reviewCount: ((Math.floor(Math.random()*1000))),
        shared: {
            facebook: faker.random.boolean(),
            twitter: faker.random.boolean(),
            email: faker.random.boolean(),
        },
        image: {
            living_room: `https://s3-us-west-1.amazonaws.com/hrsf93-fec-pictures/Living+Room/livingroomimage${i}.jpg`,
            bedroom: `https://s3-us-west-1.amazonaws.com/hrsf93-fec-pictures/Bedroom/bedroomimage${i}.jpg`, 
            dining_room: `https://s3-us-west-1.amazonaws.com/hrsf93-fec-pictures/Dining+Room/diningroomimage${1}.jpg`,
            den: `https://s3-us-west-1.amazonaws.com/hrsf93-fec-pictures/Den/denimage${i}.jpg`,
        },
        descriptions: {
            living_room: 'live joyfully',
            bedroom: 'sleep comfortably',
            dining_room: 'dine lavishly',
            den: 'enjoy yourself',
        }
        });

    }

  return resultArr;
}; 

var sampleImagesArr = imageDataCreater();

const insertSampleImages = function() {
    image.Image.create(sampleImagesArr)
      .then(() => db.disconnect());
  };
  
insertSampleImages();