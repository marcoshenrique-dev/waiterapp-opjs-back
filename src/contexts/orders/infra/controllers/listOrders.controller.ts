import { Request, Response } from 'express';
import { listOrdersUseCase } from '@orders/useCases';

export async function listOrdersController(_: Request, res: Response) {
  try {
    const orders = await listOrdersUseCase();

    res.json(orders);

  } catch (error){

    console.log(error);
    res.sendStatus(500);

  }
}
