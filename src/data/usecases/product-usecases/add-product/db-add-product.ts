import { Inject, Injectable } from '@nestjs/common';
import { Product } from '../../../../domain/models/product/product';
import * as addProduct from '../../../../domain/usecases/product/add-product/add-product';
import * as product from '../../../protocols/db/product';
import { AddProduct } from '../../../../domain/usecases/product/add-product/add-product';

@Injectable()
export class DbAddProduct implements AddProduct {
  constructor(
    @Inject(product.AddProductRepositoryToken)
    private readonly addProductRepository: product.AddProductRepository,
  ) {}
  async add(product: addProduct.AddProductModel): Promise<Product> {
    if (product.stock <= 0) {
      throw new Error('Invalid price');
    }
    const addProduct = await this.addProductRepository.add(product);
    return addProduct;
  }
}
