import { Inject, Injectable } from '@nestjs/common';
import { Product } from '../../../../domain/models/product/product';
import { LoadProductById } from '../../../../domain/usecases/product/load-one-product/load-one-product';
import * as product from '../../../protocols/db/product';
@Injectable()
export class DbLoadOneProduct implements LoadProductById {
  constructor(
    @Inject(product.LoadOneProductRepositoryToken)
    private readonly loadOneProductRepository: product.LoadOneProductRepository,
  ) {}
  async loadOne(id: number): Promise<Product> {
    const loadOneProduct = await this.loadOneProductRepository.loadOne(id);
    return loadOneProduct;
  }
}
