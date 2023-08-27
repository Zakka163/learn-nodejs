// const cluster = require('node:cluster');
// const http = require('node:http');
// const numCPUs = require('node:os').availableParallelism();
// const process = require('node:process');

// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }

var {createPool}= require('mysql')

var con = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database:"learn",
  connectionLimit:2
});


for (let index = 0; index < 1000; index++) {
  con.query(`insert into dummy(nomor) values(${index})`,(err,result,feils)=>{
    if(err){
        throw err;
    }
    console.log(result);
})
}