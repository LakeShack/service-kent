const express = require('express');
const bodyParser = require('body-parser');
const image = require('../database/image.js');
const app = express();
const PORT = 4212;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public/dist'));

app.get('/images/:id', function(req, res) {
  console.log('GET REQUEST WORKING');

  let idRequested = req.params.id;
  console.log('APP GET ID', req.params.id);

  image.getImages(idRequested, function(err, image) {
    if (err) {
      console.log('ERROR IN GET IMAGE SERVER -> DB', err);
      return;
    } else {
      res.json(image);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
