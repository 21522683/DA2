import express from 'express'
import { OrderController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();


router.post('/createOrderUser', checkToken, OrderController.createOrderUser);
router.get('/getAllOrders', OrderController.getAllOrders);
router.get('/getAllOrdersByUserId/:userId', OrderController.getAllOrdersByUserId);
router.patch('/updateStatusOrder/:id', OrderController.updateStatusOrder);

export default router;