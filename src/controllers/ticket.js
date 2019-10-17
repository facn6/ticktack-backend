const Tickets = require('../database/models/Tickets.js');

module.exports.getTicketsByGenre = ({ body }, res, next) => {
  Tickets.getTicketsByGenre(body)
    .then((tickets) => {
      res.status(200).json(tickets);
    }).catch((err) => next(err));
};
