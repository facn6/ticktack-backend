const dbConnection = require('../databaseConnection');

const postImages = (url, artist, ticket) => {
  // const { mood, date, time } = body;

  dbConnection.query(
    `INSERT INTO images(image_url, artist_name, event_name) VALUES($1, $2, $3)`, [url, artist, ticket]
  );
};

module.exports = {
  postImages
};
