import express from 'express'
import { ContainerController } from "../controllers/index.js";

const router = express.Router();

router.get('/getAllContainer', ContainerController.getAllContainer);
router.post('/createContainer', ContainerController.createContainer);
router.put('/updateContainer/:id', ContainerController.updateContainer);
router.delete('/deleteContainer/:id', ContainerController.deleteContainer);



export default router;