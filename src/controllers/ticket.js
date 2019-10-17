const Tickets = require('../database/models/Tickets.js');

module.exports.getTicketsByGenre = ({ body }, res, next) => {
  Tickets.getTicketsByGenre(body)
    .then((tickets) => {
      res.status(200).json(tickets);
    }).catch((err) => next(err));
};

module.exports.getTickets = (req, res, next) => {
  Tickets.getTickets()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

module.exports.gettopTickets = (req, res, next) => {
  Tickets.mostViewedTickets()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};
