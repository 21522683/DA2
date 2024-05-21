import express from 'express'
import { OrderController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();


router.post('/createOrderUser', checkToken, OrderController.createOrderUser);
router.get('/getAllOrders', OrderController.getAllOrders);
router.get('/getAllOrdersByUserId/:userId', checkToken, OrderController.getAllOrdersByUserId);
router.patch('/updateStatusOrder/:id', OrderController.updateStatusOrder);
router.patch('/cancelOrder/:id', OrderController.cancelOrder);
export default router;