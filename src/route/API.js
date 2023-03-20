import express from "express";
import ApiController from '../controller/ApiController';
let router = express.Router();
const initAPIRoute = (app) => {
    router.get('/users', ApiController.getUser)
    router.post('/Create-User', ApiController.postCreateUser)
    router.put('/Update-User', ApiController.putUpdateUser)
    router.delete('/Delete-User', ApiController.deleteUser)


    app.use("/api/v1/", router);
}
export default initAPIRoute;