const path = require('path');

const express = require('express');

require('env2')('config.env');

const bodyParser = require('body-parser');

const getArtists = require('./database/models/getArtists');

const getTickets = require('./database/models/getTickets');

const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/artists', (req, res, next) => {
  getArtists.getArtists()
    .then((data) => {
      res.status(200).json(data)
    }).catch((err) => next(err));
});

app.post('/gettickets', ({body}, res, next) => {
  getTickets.getTicketsByGenre()
    .then((tickets) => {
      res.status(200).json(tickets)
    }).catch((err) => next(err));
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
