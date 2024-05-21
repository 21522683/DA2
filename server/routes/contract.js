import express from 'express'
import { ContractController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();


router.get('/getAllContractOfUser/:id', checkToken,  ContractController.getAllContractOfUser);
router.get('/getAllContract', checkToken,  ContractController.getAllContract);
router.patch('/updateStatusContract/:id', checkToken,  ContractController.updateStatusContract);

export default router;