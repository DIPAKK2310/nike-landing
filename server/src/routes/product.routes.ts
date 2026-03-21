import express from 'express';
import {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/product.controller';

const router = express.Router();

// GET all products
router.get('/', getProducts);

// GET single product
router.get('/:id', getSingleProduct);

// POST create product
router.post('/', createProduct);

// PUT update product
router.put('/:id', updateProduct);

// DELETE product
router.delete('/:id', deleteProduct);

export default router;