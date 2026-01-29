import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Product } from '../../../../domain/models/product/product';
import { LoadAllProduct } from '../../../../domain/usecases/product/load-all-product/load-all-product';
import * as product from '../../../protocols/db/product';
import { Inject } from '@nestjs/common';
@Injectable()
export class DbLoadAllProduct implements LoadAllProduct {
  constructor(
    @Inject(product.LoadAllProductRepositoryToken)
    private readonly loadAllProductRepository: product.LoadAllProductRepository,
  ) {}
  async load(): Promise<Product[]> {
    const loadAllProduct = await this.loadAllProductRepository.loadAll();
    return loadAllProduct;
  }
}
