const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/imagebnb';
const db = mongoose.connect(mongoUri);

module.exports = db;
