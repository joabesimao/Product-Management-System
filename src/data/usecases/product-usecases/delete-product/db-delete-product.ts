import { Inject, Injectable } from '@nestjs/common';

import { DeleteProductById } from '../../../../domain/usecases/product/delete-product/delete-product';
import * as product from '../../../protocols/db/product';
@Injectable()
export class DbDeleteProduct implements DeleteProductById {
  constructor(
    @Inject(product.DeleteProductRepositoryToken)
    private readonly deleteProductRepository: product.DeleteProductRepository,
  ) {}
  async delete(id: number): Promise<string> {
    const deleteProduct = await this.deleteProductRepository.delete(id);
    return deleteProduct;
  }
}
