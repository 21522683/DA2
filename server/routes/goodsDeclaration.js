import express from 'express'
import { GoodsDeclarationController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();

router.get('/getAllGoodsDeclaration', GoodsDeclarationController.getAllGoodsDeclaration);
// router.post('/createOrderUser', checkToken, GoodsDeclarationController.createOrderUser);
// router.get('/getAllOrdersByUserId/:userId', GoodsDeclarationController.getAllOrdersByUserId);
// router.patch('/updateStatusOrder/:id', GoodsDeclarationController.updateStatusOrder);

export default router;