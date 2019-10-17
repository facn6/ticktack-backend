const router= require('express').Router();
const artistController = require('./controllers/artist.js');
const ticketController = require('./controllers/ticket.js');

router
  .route('/artists')
  .get(artistController.getArtist)

  router
  .route('/getticketsbygenre')
  .post(ticketController.getTicketsByGenre)

  router
  .route('/tickets')
  .get(ticketController.getTickets)


  router
  .route('/toptickets')
  .get(ticketController.gettopTickets)




  module.exports = router;
