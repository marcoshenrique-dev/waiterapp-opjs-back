import { Request, Response } from 'express';
import { changeOrderStatusUseCase } from '@orders/useCases';

export async function changeOrderStatusController(request: Request, response: Response) {
  try {

    const { orderId } = request.params;
    const { status } = request.body;

    if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return response.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
      });
    }

    await changeOrderStatusUseCase(orderId, status);

    response.sendStatus(204);
  } catch (error){

    console.log(error);
    response.sendStatus(500);

  }
}
