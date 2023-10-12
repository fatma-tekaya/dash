import express from "express"

import {
    addClient,
    getClient,
} from "../controllers/clientController.js";

import { adminprotect } from "../middleware/authMiddleware.js";


const router = express.Router();
router.post('/', addClient);
router.route('/').get(adminprotect, getClient);


export default router;