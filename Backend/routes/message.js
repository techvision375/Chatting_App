import express from 'express';
import { sendMessage } from '../controller/message.js';
import secureRoute from '../middlewares/secureRoute.js';
import { getMessage } from '../controller/message.js';
const router = express.Router();
router.post("/send/:id", secureRoute, sendMessage);
router.get("/get/:id", secureRoute , getMessage);
export default router;