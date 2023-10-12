import express from "express"

import {
    addQuestion,
    getQuestion,
    updateQuestion,
    deleteQuestion

} from "../controllers/questionController.js";

import { adminprotect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.route('/').post(adminprotect, addQuestion).put(adminprotect, updateQuestion);
router.get('/', getQuestion);
router.route('/:id').put(adminprotect, updateQuestion).delete(adminprotect, deleteQuestion);




export default router;