const tape = require("tape");
const _test = require('tape-promise').default;
const runDbBuild = require("../src/database/databaseBuild.js");
const queriesArtists = require('../src/database/models/Artists.js');
const queriesTickets = require('../src/database/models/Tickets.js');
const request = require('supertest');
const app = require('../src/server.js');

const test = _test(tape);

const Artist1 = {
  id: 1,
  name: 'Rihanna',
  description: 'Jomana in arabic',
  genre: 'Hip-hop',
};

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

test('Test that getArtists returns all the Artists info', (t) => {
  runDbBuild(function(err, res){
  queriesArtists
    .getArtists()
    .then((result) => {
      t.deepEqual(
        result[0].artist_name,
        Artist1.name,
        'returns the correct info from DB',
      );
      t.end();
    })
    .catch((error) => {
      if (error) console.log('we have an error with the query: ', error);
    });
});
});

test('First Artist Should be Rihanna', t => {
  runDbBuild(function(err, res){
  request(app)
    .get('/artists/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.same(res.body[0].artist_name, 'Rihanna');
      t.end();
    });
});
});
