const mongoose = require('mongoose');
const mongoUri = 'mongodb://172.17.0.2/imagebnb';
const db = mongoose.connect(mongoUri);

module.exports = db;
