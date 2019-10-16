const dbConnection = require('../databaseConnection');



const getArtists =() => {
  return new Promise((resolve,reject)=>{
    dbConnection.query('SELECT * FROM artists',(err,res)=>{
    if(err)
    {
      reject(err);
    } else{
      resolve(res.rows);
    }
  });
  })

};











module.exports =
{
  getArtists
};
