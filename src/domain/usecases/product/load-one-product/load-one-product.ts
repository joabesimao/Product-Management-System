import { Product } from '../../../models/product/product';

export interface LoadProductById {
  loadOne(id: number): Promise<Product>;
}

export const LoadOneProductToken = 'LoadOneProductToken';
