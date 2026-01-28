import { Product } from '../../../models/product/product';

export interface LoadProductById {
  loadOne(id: number): Promise<Product>;
}
