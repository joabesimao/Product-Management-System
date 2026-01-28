import { Product } from '../../../models/product/product';

export interface LoadAllProduct {
  load(): Promise<Product[]>;
}

export const LoadAllProductToken = 'LoadAllProduct';
