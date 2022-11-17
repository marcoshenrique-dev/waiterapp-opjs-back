import { Router } from 'express';

import { categoriesRouter } from '@categories/infra/categories.routes';
import { productsRouter } from '@products/infra/products.routes';
import { ordersRouter } from '@orders/infra/orders.routes';

export const router = Router();

router.use('/', categoriesRouter);
router.use('/', productsRouter);
router.use('/', ordersRouter);

