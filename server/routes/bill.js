import express from 'express'
import { BillController } from "../controllers/index.js";

const router = express.Router();


router.get('/getAllBillOfUser/:userId', BillController.getAllBillOfUser);


export default router;