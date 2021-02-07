const port = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fakedb = require('./fakedb')

app.use(bodyParser.urlencoded( {extended: true}))


//Example
app.get("/products", (req, res, next) => {
    res.send(fakedb.getProducts()) // Will convert to JSON
})

app.get("/products/:id", (req, res, next) => {
    res.send(fakedb.getProduct(req.params.id)) // Will convert to JSON
})

app.post("/products", (req, res, next) => {
    const product = fakedb.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // JSON
})

app.put("/products/:id", (req, res, next) => {
    const product = fakedb.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // JSON
})

app.delete("/products/:id", (req, res, next) => {
    const product = fakedb.deleteProduct(req.params.id)
    res.send(product) // JSON
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})