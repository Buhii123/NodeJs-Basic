import express from "express";
import homeController from '../controller/homeController';

import multer from 'multer';
import path from 'path';
var appRoot = require('app-root-path');

let router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/images/");
    },
    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)
    router.get('/about', homeController.getAboutpage)
    router.get('/contact', homeController.getContactpage)
    router.get('/tours', homeController.getTourspage)
    router.get('/destination', homeController.getDestinationspage)
    router.get('/testpage', homeController.getTestspage)

    router.get('/testpage/:id', homeController.getDetailPage)

    router.post('/update-user/:id', homeController.postUdateUser)
    router.post('/delete-user', homeController.postDeleteUser)

    router.post('/Create-New-User', upload.single('img'), homeController.postCreateNewUser)

    router.post('/upload-profile-pic', upload.single('img'), homeController.handleUploadFile)





    app.use('/', router)
}
export default initWebRoute;