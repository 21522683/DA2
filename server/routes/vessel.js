import express from 'express'
import { VesselController } from "../controllers/index.js";

const router = express.Router();

router.get('/getAllVessel', VesselController.getAllVessel);
router.post('/createVessel', VesselController.createVessel);
router.put('/updateVessel/:id', VesselController.updateVessel);
router.delete('/deleteVessel/:id', VesselController.deleteVessel);

export default router;