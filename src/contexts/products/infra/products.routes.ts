import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

import { createProductController, listProductsController } from './controllers';

export const productsRouter = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', '..', '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),

});

// LIST PRODUCTS
productsRouter.post('/products', upload.single('image'), createProductController);

// CREATE PRODUCT
productsRouter.get('/products', listProductsController);
