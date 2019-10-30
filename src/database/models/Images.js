const dbConnection = require('../databaseConnection');

const postImages = (url, artist, ticket) => {
  // const { mood, date, time } = body;

  dbConnection.query(
    `INSERT INTO images(image_url, artist_id) VALUES($1, $2)`, [url, artist]
  );
};

module.exports = {
  postImages
};
