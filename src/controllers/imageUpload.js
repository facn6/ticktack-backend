const Images = require('../database/models/Images');
const bodyParser = require("body-parser");



module.exports.uploadImage = (req, res, next) => {
const url = req.body["avatar-url"];
const artist = req.body["artist"];
const ticket = req.body["ticket"];
  console.log("Url, artist, event", url, artist, ticket);
  Images.postImages(url, artist, ticket)
  res.send('Your file is safe with us');
};
