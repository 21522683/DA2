import express from 'express'
import { OrderController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();


router.post('/createOrderUser', checkToken, OrderController.createOrderUser);

export default router;