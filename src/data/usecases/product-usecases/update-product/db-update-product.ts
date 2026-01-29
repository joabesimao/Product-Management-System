import {
  Product,
  ProductModel,
} from '../../../../domain/models/product/product';
import { UpdateProduct } from '../../../../domain/usecases/product/update-product/update-product';

import * as product from '../../../protocols/db/product';
import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class DbUpdateProduct implements UpdateProduct {
  constructor(
    @Inject(product.DeleteProductRepositoryToken)
    private readonly updateProductRepository: product.UpdateProductRepository,
  ) {}
  async update(id: number, info: Partial<ProductModel>): Promise<Product> {
    const updateOneProduct = await this.updateProductRepository.update(
      id,
      info,
    );
    if (updateOneProduct.price <= 0) {
      throw new Error('Invalid price');
    }
    return updateOneProduct;
  }
}
