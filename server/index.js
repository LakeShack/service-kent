const express = require('express');
const bodyParser = require('body-parser');
const image = require('../database/image.js');
const app = express();
const port = 4212;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/images/:id', function(req, res) {
  console.log('GET REQUEST WORKING');

  let idRequested = req.params.id;
  image.getImages(idRequested, function(err, image) {
    if (err) {
      console.log('ERROR IN GET IMAGE SERVER -> DB', err);
      return;
    } else {
      res.json(image);
    }
  });
});

app.patch('/images/:id', function(req, res) {
  console.log('APP PATCH WORKING');
  image.patchImage(req.params.id, function(err, image) {
    if (err) {
      console.log('ERROR IN PATCH SERVER ', err);
      return;
    } else {
      res.json(image);
    }
  });
});
  

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
