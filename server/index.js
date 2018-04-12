const express = require('express');
const bodyParser = require('body-parser');

const Image = require('../database/image.js');

const app = express();
const PORT = 4212;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public/dist'));

app.get('/images', function(req, res) {
  console.log('GET REQUEST SUCCESSFUL');
  res.end();
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
