import express from 'express'
import { GoodsDeclarationController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();

router.get('/getAllGoodsDeclaration', GoodsDeclarationController.getAllGoodsDeclaration);
router.post('/createBillUser/:idKKHH', GoodsDeclarationController.createBillUser);
// router.get('/getAllOrdersByUserId/:userId', GoodsDeclarationController.getAllOrdersByUserId);
// router.patch('/updateStatusOrder/:id', GoodsDeclarationController.updateStatusOrder);

export default router;