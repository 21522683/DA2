import express from 'express'
import { UserController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();

router.post('/checkRegisterEmail', UserController.checkRegisterEmail);
router.get("/registerUser/:tokenLinkVerifyEmail", UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/getInfoCurrentUser',checkToken, UserController.getInfoCurrentUser);




export default router;