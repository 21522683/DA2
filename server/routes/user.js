import express from 'express'
import { UserController } from "../controllers/index.js";

const router = express.Router();


router.get('/getAll', UserController.getAllUser);
router.post('/login', UserController.login);
router.put('/updateUser/:id', UserController.updateUser);




export default router;