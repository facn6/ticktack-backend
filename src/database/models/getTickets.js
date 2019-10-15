const dbConnection = require('../databaseConnection');

const getTickets = () =>{

return new Promise((resolve, reject) =>

  {

    dbConnection.query('SELECT * FROM tickets', (err, res) => {

      if (err)
      {
        reject(err);
      }
      else
    {
      resolve(res.rows);
    }
  });

});
};


module.exports =
{
  getTickets
};
