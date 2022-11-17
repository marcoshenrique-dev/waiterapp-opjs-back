import { ICreateProductDTO } from '@products/core/dtos';
import { Product } from '@products/core/models';

export async function createProductUseCase(data: ICreateProductDTO) {

  const product = await Product.create(data);

  return product;
}
