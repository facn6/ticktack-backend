const router= require('express').Router();
const artistController = require('./controllers/artist.js');
const ticketController = require('./controllers/ticket.js');

router
  .route('/artists')
    .get(artistController.getArtist)
  .route('/getticketsbygenre')
    .post(ticketController.getTicketsByGenre)

  module.exports = router;
