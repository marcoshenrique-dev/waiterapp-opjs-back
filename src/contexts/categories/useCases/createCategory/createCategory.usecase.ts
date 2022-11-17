import { ICreateCategoryDTO } from '@categories/core/dtos';
import { Category } from '@categories/core/models';

export async function createCategoryUseCase({icon, name}: ICreateCategoryDTO) {

  const category = await Category.create({icon, name});

  return category;
}
