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

export const AddProductToken = 'AddProductToken';
export function AddProductRepositoryToken(AddProductRepositoryToken: any): (target: typeof import("../../../../data/usecases/product-usecases/add-product/db-add-product").DbAddProduct, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

