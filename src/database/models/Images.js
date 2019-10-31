const dbConnection = require('../databaseConnection');

const getImages = () => new Promise(
  (resolve, reject) => dbConnection.query(
    'SELECT * FROM images',
    (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    },
  ),

);

const postImages = (url, artist, ticket) => 
  dbConnection.query(
    `INSERT INTO images(image_url, artist_name, event_name) VALUES($1, $2, $3)`, [url, artist, ticket]
  );

module.exports = {
  postImages,
  getImages
};
