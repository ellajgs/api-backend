const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send({"welcome": "hello world"})
})

app.get('/name', (req, res) => {
    res.send(req.query)
})

app.get('/param/:id', (req,res)=>{
    res.send(req.params)
})

app.listen(port, () => {
    console.log(`simple api listening on port ${port}`)
})