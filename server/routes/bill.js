import express from 'express'
import { BillController } from "../controllers/index.js";
import checkToken from '../middlewares/auth.js'

const router = express.Router();


router.get('/getAllBillOfUser/:id',  BillController.getAllBillOfUser);
router.get('/getAllBill',  BillController.getAllBill);
router.patch('/updateStatusBill/:id',  BillController.updateStatusBill);
router.post('/createContractUser/:idHD', BillController.createContractUser);

export default router;