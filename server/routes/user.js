import express from 'express'
import { UserController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();

router.post('/checkRegisterEmail', UserController.checkRegisterEmail);
router.get("/registerUser/:tokenLinkVerifyEmail", UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/getInfoCurrentUser',checkToken, UserController.getInfoCurrentUser);
router.post('/forgot-password', UserController.forgotPassword);
router.get('/forgot-password/:id/verify-link/:tokenVerifyLinkForgotPassword', UserController.verifyLinkForgotPassword);
router.patch('/forgot-password/update-new-password', UserController.updateNewPassword);



export default router;