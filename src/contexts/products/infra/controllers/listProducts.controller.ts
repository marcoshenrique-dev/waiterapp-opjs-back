import { Request, Response } from 'express';
import { listProductsUseCase } from '@products/useCases';

export async function listProductsController(_: Request, response: Response) {
  try {
    const products = await listProductsUseCase();

    response.json(products);

  } catch (error){

    console.log(error);
    response.sendStatus(500);

  }
}
