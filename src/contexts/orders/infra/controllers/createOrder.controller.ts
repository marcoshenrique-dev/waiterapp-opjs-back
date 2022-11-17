import { Request, Response } from 'express';
import { createOrderUseCase } from '@orders/useCases';

export async function createOrderController(request: Request, response: Response) {
  try{
    const {table, products} = request.body;

    const order = await createOrderUseCase({table, products});

    response.status(201).json(order);

  } catch (error){

    console.log(error);
    response.sendStatus(500);

  }
}
