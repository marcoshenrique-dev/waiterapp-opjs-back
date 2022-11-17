import { Category } from '@categories/core/models';

export async function listCategoryUseCase() {
  const categories = await Category.find();

  return categories;
}
