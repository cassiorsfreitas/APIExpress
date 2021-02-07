const port = 3003
const express = require('express')
const app = express()


//Example
app.get("/products", (req, res, next) => {
    res.send({
        name: "Apple Watch",
        price: 200
    }) // Will convert to JSON
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})