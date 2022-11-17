import { Request, Response } from 'express';
import { createProductUseCase } from '@products/useCases';

export async function createProductController(request: Request, response: Response) {
  try{
    const imagePath = request.file?.filename;
    const {name, description, price, category, ingredients} = request.body;

    const product = await createProductUseCase({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath
    });

    response.status(201).json(product);

  } catch (error){

    console.log(error);
    response.sendStatus(500);

  }
}
