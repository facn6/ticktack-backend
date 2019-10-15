const path = require('path');

const express = require('express');

require('env2')('config.env');

const bodyParser = require('body-parser');

const getData = require('./database/models/getArtists');

const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/artists', (req, res, next) => {
  getData.getArtists()
    .then((data) => {
      res.status(200).json(data)
    }).catch((err) => next(err));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
