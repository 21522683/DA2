import express from 'express'
import { UserController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();

router.post('/checkRegisterEmail', UserController.checkRegisterEmail);
router.get("/registerUser/:tokenLinkVerifyEmail", UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/getInfoCurrentUser', checkToken, UserController.getInfoCurrentUser);
router.post('/forgot-password', UserController.forgotPassword);
router.get('/forgot-password/:id/verify-link/:tokenVerifyLinkForgotPassword', UserController.verifyLinkForgotPassword);
router.patch('/forgot-password/update-new-password', UserController.updateNewPassword);

router.patch('/sendRequireVerifyInfo/:id', checkToken, UserController.sendRequireVerifyInfo);
router.get('/getUserById/:id', UserController.getUserById);
router.patch('/verifyInfomationUser/:id', UserController.verifyInfomationUser);
router.patch('/updateInfomationUser/:id', checkToken, UserController.updateInfomationUser);
router.patch('/updateStatusAccount/:id', UserController.updateStatusAccount);
router.get('/getAllUser', checkToken, UserController.getAllUser);
router.post('/sendEmailNotifyToUser', UserController.sendEmailNotifyToUser);

export default router;