import express from "express"

import {   
    addOffer,
    getOffer,
    updateOffer,
    deleteOffer

} from "../controllers/offerController.js";

import { adminprotect } from "../middleware/authMiddleware.js"; 


const router=express.Router();

router.route('/').post(adminprotect,addOffer).put(adminprotect,updateOffer);
router.get('/',getOffer);
router.route('/:id').put(adminprotect,updateOffer).delete(adminprotect,deleteOffer);




export default router;