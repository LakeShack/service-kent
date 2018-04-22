const express = require('express');
const bodyParser = require('body-parser');
const image = require('../database/image.js');
const app = express();
const port = 4212;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.get('/images/:id', function (req, res) {

  image.getImages(req.params.id, function (err, result) {
    if (err) {
      console.log('GET IMAGE ERR');
      return;
    } else {
      res.json(result);
    }
  });

});

app.patch('/images/:id', function (req, res) {

  if (!req.body.shared) {
    image.getImages(req.params.id, function (err, result) {
      if (err) {
        console.log('PATCH IMAGE ERROR');
        return;
      } else {
        if (result.saved) {
          image.patchImageUnsave(req.params.id, function (err, result) {
            if (err) {
              return;
            } else {
              res.json(result);
            }
          });
        } else {
          image.patchImageSave(req.params.id, function (err, result) {
            if (err) {
              return;
            } else {
              res.json(result);
            }
          });
        }
      }
    });
  } else {
    console.log('share request received ', req.body.shared);
    image.patchImageShare(req.params.id, function(err, result) {
      if (err) {
        return;
      } else {
        res.json(result);
      }
    });
  }
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
