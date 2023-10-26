const express = require('express')

const app = express()
const port = 3000
let current = 0

app.get('/', (req, res) => {    
//   res.send(`get...`)
  res.json({"data":`Hello from server ${getnum(false)}`})
})
app.get('/', (req, res) => {
    current = 0
    console.log("reset");
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



function getnum(bool){
    if(bool){
        return parseInt(Math.random()*10)
    }else{
        current = current + 1
        return current
    }
}
// console.log();