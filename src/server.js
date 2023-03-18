import express from "express"
import configviewEngine from "./configs/viewEngine"
const app = express()
const port = 3000
configviewEngine(app);
app.get('/', (req, res) => {
    res.send('<h1>Bui thanh Hieu<\h1>')
})
app.get('/test', (req, res) => {
    res.send('<h1>Bui thanh Hieu2<\h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})