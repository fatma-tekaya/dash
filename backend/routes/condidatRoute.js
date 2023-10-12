import express from "express"

import {
    addCondidat,
    getCondidat,
} from "../controllers/condidatController.js";

import { adminprotect } from "../middleware/authMiddleware.js";


const router = express.Router();
router.post('/', addCondidat);
router.route('/').get(adminprotect, getCondidat)


export default router;