const Images = require('../database/models/Images.js');


module.exports.getImages = (req, res, next) => {
  Images.getImages()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};
