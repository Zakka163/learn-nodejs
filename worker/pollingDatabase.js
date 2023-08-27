// var mysql = require('mysql');
// const { log } = require('console');
var {createPool}= require('mysql')

var con = createPool({
  host: "localhost",
  user: "root",
  password: "",
  connectionLimit:2
});


con.query('show databases',(err,result,feils)=>{
    if(err){
        throw err;
    }
    console.log(result);
})
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });