const express = require('express')

// const math = require('m')
const app = express()
const port = 3002
// let current = 0

app.get('/', (req, res) => {    
//   res.send(`get...`)
  console.log("get");
  res.json({"data":`Hello from server 2`})
})

app.get('/loop',(req,res)=>{
  for (let i = 0; i < 100000; i++) {
   console.log(i);
  }
  res.json({"data":`Finish server 2`})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

