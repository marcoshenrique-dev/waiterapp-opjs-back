import { Request, Response } from 'express';
import { listCategoryUseCase } from '@categories/useCases';

export async function listCategoriesController(_: Request, response: Response) {
  try {
    const categories = await listCategoryUseCase();

    response.json(categories);

  } catch (error){

    console.log(error);
    response.sendStatus(500);

  }
}
