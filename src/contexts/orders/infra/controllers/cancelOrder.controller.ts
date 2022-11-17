import { Request, Response } from 'express';
import { cancelOrderUseCase } from '@orders/useCases';

export async function cancelOrderController(req: Request, res: Response) {
  try{
    const {orderId} = req.params;

    await cancelOrderUseCase(orderId);

    res.sendStatus(204);

  } catch (error){

    console.log(error);
    res.sendStatus(500);

  }
}
