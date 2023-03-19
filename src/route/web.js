import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)
    router.get('/about', homeController.getAboutpage)
    router.get('/contact', homeController.getContactpage)
    router.get('/tours', homeController.getTourspage)
    router.get('/destination', homeController.getDestinationspage)
    router.get('/testpage', homeController.getTestspage)
    router.get('/testpage/:id', homeController.getDetailPage)






    app.use('/', router)
}
export default initWebRoute;