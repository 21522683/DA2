import express from 'express'
import { GoodsDeclarationController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();

router.get('/getAllGoodsDeclaration', GoodsDeclarationController.getAllGoodsDeclaration);
router.post('/createBillUser/:idKKHH', GoodsDeclarationController.createBillUser);

export default router;