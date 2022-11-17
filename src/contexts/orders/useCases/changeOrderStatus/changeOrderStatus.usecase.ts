import { Order } from '@orders/core/models';

export async function changeOrderStatusUseCase(orderId: string, status: string) {

  await Order.findByIdAndUpdate(orderId, {status});
}
