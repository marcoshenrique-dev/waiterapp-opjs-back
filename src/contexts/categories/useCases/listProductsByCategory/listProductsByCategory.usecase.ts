/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Product } from '@products/core/models';

export async function listProductsByCategoryUseCase(categoryId: string) {

  //@ts-ignore
  const products = await Product.find().where('category').equals(categoryId);

  return products;
}
