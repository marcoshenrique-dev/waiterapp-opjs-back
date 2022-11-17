export interface ICreateProductDTO {
  name: string;
  description: string;
  imagePath?: string;
  price: number;
  ingredients: IIngredients[];
  category: string;
}

interface IIngredients {
  name: string;
  icon: string;
}
