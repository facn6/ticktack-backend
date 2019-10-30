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

module.exports = {
  getImages,
};
