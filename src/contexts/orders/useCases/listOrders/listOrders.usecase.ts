import { Order } from '@orders/core/models';

export async function listOrdersUseCase() {
  const orders = await Order.find().sort({ createdAt: 1 }).populate('products.product');

  return orders;
}
