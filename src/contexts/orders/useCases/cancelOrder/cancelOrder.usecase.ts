import { Order } from '@orders/core/models';

export async function cancelOrderUseCase(orderId: string) {

  await Order.findByIdAndDelete(orderId);
}
