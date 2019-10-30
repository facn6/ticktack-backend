const router = require('express').Router();
const artistController = require('./controllers/artist.js');
const ticketController = require('./controllers/ticket.js');
const emailController = require('./controllers/email.js');
const imageController = require("./controllers/image.js");
const imageUploadController = require("./controllers/imageUpload.js");

router
  .route('/artists')
  .get(artistController.getArtist)

router.route("/getticketsbygenre").post(ticketController.getTicketsByGenre);

router.route("/tickets").get(ticketController.getTickets);

router.route("/topticketsbyviews").get(ticketController.gettopTickets);

router.route("/topartists").get(artistController.gettopArtists);

router.route("/uploads").get(imageController.uploadImage);

router.route("/upload-image").post(imageUploadController.uploadImage);

router
  .route('/sendEmail')
  .post(emailController.sendContactEmail)
// router
//   .route('/topticketsbydate')
//   .get(ticketController.getClosestTickets)

module.exports = router;
