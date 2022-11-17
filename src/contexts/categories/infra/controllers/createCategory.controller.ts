import { Request, Response } from 'express';
import { createCategoryUseCase } from '@categories/useCases';

export async function createCategoryController(request: Request, response: Response) {
  try{
    const {icon, name} = request.body;

    const category = await createCategoryUseCase({icon, name});

    response.status(201).json(category);

  } catch (error){

    console.log(error);
    response.sendStatus(500);

  }
}
