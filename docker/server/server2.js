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
// app.get('/reset', (req, res) => {
//     current = 0
//     console.log("reset");
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

