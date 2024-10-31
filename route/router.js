import express from "express" ;
import {homePageController} from '../controller/homeController.js'
import { signinController, signinPageController, signout, userAuth } from "../controller/signinController.js";
import { signupController, signupPageController } from "../controller/signupController.js";

const router = express.Router() ;

router.get('/', userAuth, homePageController) ; 
router.get('/signup', signupPageController) ;
router.post('/signup', signupController) ;
router.get('/signin', signinPageController);
router.post('/signin', signinController)
router.post('/signout', signout) ;

export default router 