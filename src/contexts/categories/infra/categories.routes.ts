import { Router } from 'express';
import { createCategoryController, listCategoriesController, listProductsByCategoryController } from './controllers';

export const categoriesRouter = Router();

// LIST CATEGORIES
categoriesRouter.get('/categories', listCategoriesController);

// CREATE CATEGORY
categoriesRouter.post('/categories', createCategoryController);

// GET PRODUCTS BY CATEGORY
categoriesRouter.get('/categories/:categoryId/products', listProductsByCategoryController);
