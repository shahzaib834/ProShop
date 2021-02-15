import express from 'express';
const router = express.Router();
import {getProducts , getProductByID} from '../controllers/productsController.js';

router.route('/').get(getProducts);

router.route('/:id').get(getProductByID);

export default router;
