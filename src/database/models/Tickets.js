const dbConnection = require('../databaseConnection');

const getTickets = () => new Promise(
  (resolve, reject) => dbConnection.query('SELECT * FROM tickets', (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res.rows);
    }
  }),
);


const getTicketsByGenre = (body) => {
  const { genre } = body;
  return dbConnection.query('SELECT * FROM tickets WHERE (genre = $1)', [genre]);
};

const mostViewedTickets = () => new Promise(
  (resolve, reject) => dbConnection.query('SELECT * FROM tickets ORDER BY views DESC LIMIT 5', (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res.rows);
    }
  }),
);

const closestTickets = () => new Promise(
  (resolve, reject) => dbConnection.query('SELECT * FROM tickets ORDER BY date LIMIT 5', (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res.rows);
    }
  }),
);
module.exports = {
  getTicketsByGenre, getTickets, mostViewedTickets,closestTickets
};
