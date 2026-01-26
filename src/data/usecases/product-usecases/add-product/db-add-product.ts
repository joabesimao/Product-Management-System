import { Product } from '../../../../domain/models/product/product';
import {
  AddProduct,
  AddProductModel,
} from '../../../../domain/usecases/product/add-product/add-product';
import { AddProductRepository } from '../../../protocols/db/product/add-product';

export class DbAddProduct implements AddProduct {
  constructor(private readonly addProductRepository: AddProductRepository) {}
  async add(product: AddProductModel): Promise<Product> {
    if (product.stock <= 0) {
      throw new Error('Invalid price');
    }
    const addProduct = await this.addProductRepository.add(product);
    return addProduct;
  }
}
