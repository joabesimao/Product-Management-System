import { Product } from '../../../../domain/models/product/product';
import { LoadAllProduct } from '../../../../domain/usecases/product/load-all-product/load-all-product';
import { LoadAllProductRepository } from '../../../protocols/db/product/load-all-product';

export class DbLoadAllProduct implements LoadAllProduct {
  constructor(
    private readonly loadAllProductRepository: LoadAllProductRepository,
  ) {}
  async load(): Promise<Product[]> {
    const loadAllProduct = await this.loadAllProductRepository.loadAll();
    return loadAllProduct;
  }
}
