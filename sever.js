const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Bui thanh Hieu<\h1>')
})
app.get('/test', (req, res) => {
    res.send('<h1>Bui thanh Hieu2<\h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})