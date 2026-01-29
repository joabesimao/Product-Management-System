import { Product } from '../../../../domain/models/product/product';

export interface LoadAllProductRepository {
  loadAll(): Promise<Product[]>;
}

export const LoadAllProductRepositoryToken = 'LoadAllProductRepositoryToken';
