const dbConnection = require('../databaseConnection');


const getArtists = () => new Promise(
  (resolve, reject) => dbConnection.query(
    'SELECT * FROM artists',
    (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    },
  ),

);

const mostViewedArtists = () => new Promise(
  (resolve, reject) => dbConnection.query('SELECT * FROM artists ORDER BY views DESC LIMIT 5', (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res.rows);
    }
  }),
);

module.exports = {
  getArtists, mostViewedArtists,
};
