const express = require('express')

// const math = require('m')
const app = express()
const port = 3003
// let current = 0

app.get('/', (req, res) => {
  //   res.send(`get...`)
  console.log("get ",req.ip);

  res.json({ "data": `Hello from server 3` })
})
// app.get('/reset', (req, res) => {
//     current = 0
//     console.log("reset");
//   })

app.get('/loop',(req,res)=>{
  for (let i = 0; i < 100000; i++) {
   console.log(i);
  }
  res.json({"data":`Finish server 3`})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

