export interface ICreateOrderDTO {
  table: string;
  products: IProducts[];
}

interface IProducts {
  product: string;
  quantity: number;
}
