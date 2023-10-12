import express from "express"
import {
    addInfo,
    getInfo,
    updateInfo,

} from "../controllers/infoController.js";

import { adminprotect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get('/get', getInfo)
router.route('/').post(adminprotect, addInfo);
router.route('/:id').put(adminprotect, updateInfo);

export default router;