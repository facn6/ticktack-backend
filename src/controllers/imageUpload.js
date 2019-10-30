const Images = require('../database/models/Images');
const bodyParser = require("body-parser");



module.exports.uploadImage = (req, res, next) => {
const url = req.body["avatar-url"];
const artist = req.body["artist"];
const ticket = req.body["ticket"];
  console.log("Url, artist, ticket", url, artist, ticket);
  Images.postImages(url, artist, ticket)
    // .then((data) => res.status(200).json(data))
    // .catch((err) => next(err));
};
