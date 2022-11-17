import { ICreateOrderDTO } from '@orders/core/dtos';
import { Order } from '@orders/core/models';

export async function createOrderUseCase({products,table}: ICreateOrderDTO) {

  const order = await Order.create({
    table,
    products
  });


  return order;
}
