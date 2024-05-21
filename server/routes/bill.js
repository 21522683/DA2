import express from 'express'
import { BillController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();


router.get('/getAllBillOfUser/:id', checkToken,  BillController.getAllBillOfUser);
router.get('/getAllBill', checkToken,  BillController.getAllBill);
router.patch('/updateStatusBill/:id', checkToken,  BillController.updateStatusBill);
router.post('/createContractUser/:idHD', BillController.createContractUser);

export default router;