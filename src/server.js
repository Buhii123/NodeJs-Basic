import express from "express"
import configviewEngine from "./configs/viewEngine"
import initWebRoute from "./route/web"
import initAPIRoute from "./route/API"

require('dotenv').config();
const app = express()
const port = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configviewEngine(app);
initWebRoute(app);
initAPIRoute(app);


app.use((req, res) => {
    return res.render('404.ejs')
})




app.listen(port, () => {
    console.log(`Chạy Thành Công Trên Cổng:  ${port}`)
})