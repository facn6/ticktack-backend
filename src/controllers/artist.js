const Artists = require('../database/models/Artists');


module.exports.getArtist = (req, res, next) => {
  Artists.getArtists()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

module.exports.gettopArtists = (req, res, next) => {
  Artists.mostViewedArtists()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};
