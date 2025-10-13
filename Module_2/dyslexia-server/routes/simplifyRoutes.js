import express from 'express';
import { simplifyText } from '../controllers/cohereController.js';

const router = express.Router();

router.post('/simplify', simplifyText);

export default router;
