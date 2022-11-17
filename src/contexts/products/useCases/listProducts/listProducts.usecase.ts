import { Product } from '@products/core/models';

export async function listProductsUseCase() {
  const products = await Product.find();

  return products;
}
