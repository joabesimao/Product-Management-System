import { Product } from '../../../models/product/product';

export interface AddProductModel {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  status: boolean;
}

export interface AddProduct {
  add(client: AddProductModel): Promise<Product>;
}
