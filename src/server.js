import express from "express"
import configviewEngine from "./configs/viewEngine"
import initWebRoute from "./route/web"

require('dotenv').config();
const app = express()
const port = process.env.PORT || 8080;


configviewEngine(app);
initWebRoute(app);






app.listen(port, () => {
    console.log(`Chạy Thành Công Trên Cổng:  ${port}`)
})