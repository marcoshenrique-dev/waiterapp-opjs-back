import { Request, Response } from 'express';
import { listProductsByCategoryUseCase } from '@categories/useCases';

export async function listProductsByCategoryController(request: Request, response: Response) {
  try {

    const {categoryId} = request.params;

    const products = await listProductsByCategoryUseCase(categoryId);

    response.json(products);

  } catch (error){

    console.log(error);
    response.sendStatus(500);

  }
}
