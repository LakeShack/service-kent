const express = require('express');
const bodyParser = require('body-parser');
const image = require('../database/image.js');
const app = express();
const cors = require('cors');
const port = 4212;
const redisClient = require('redis').createClient;
const redis = redisClient(6379, 'localhost');
const responseTime = require('response-time');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(responseTime());
app.use(cors());
app.use(express.static(__dirname + '/../public'));

app.get('/images/:id', function (req, res) {

  image.getImages(redis, req.params.id, function (result) {
    res.json(result);
  }
  );

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
    image.patchImageShare(req.params.id, function (err, result) {
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
