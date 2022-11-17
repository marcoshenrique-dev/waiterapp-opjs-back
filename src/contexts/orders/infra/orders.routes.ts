import { Router } from 'express';
import { changeOrderStatusController, createOrderController, listOrdersController } from './controllers';
import { cancelOrderController } from './controllers/cancelOrder.controller';


export const ordersRouter = Router();

// LIST ORDERS
ordersRouter.get('/orders', listOrdersController);

// CREATE ORDER
ordersRouter.post('/orders', createOrderController);


// CHANGE ORDER STATUS
ordersRouter.patch('/orders/:orderId', changeOrderStatusController);


// DELETE/CANCEL ORDER
ordersRouter.delete('/orders/:orderId', cancelOrderController);
