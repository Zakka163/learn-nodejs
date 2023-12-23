const express = require('express')
const app = express()
const port = 3003
const value = require('./data.js')
// let value = 0
app.get('/', (req, res) => {

    setTimeout(() => {
        value.set(value.get() + 1)
        console.log("server 3");
        console.log(value.get());
        res.json({ "data": `Hello World! ${value.get()}`, "server": 3 })
    }, 10000)

})
app.get('/reset', (req, res) => {
    value.set(0)
    res.send('Succes!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

