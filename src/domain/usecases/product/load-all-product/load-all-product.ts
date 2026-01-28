import { Product } from '../../../models/product/product';

export interface LoadAllProduct {
  load(): Promise<Product[]>;
}
