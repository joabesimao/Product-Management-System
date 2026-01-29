import { PrismaService } from '../../../db/prisma/prisma-service';

import {
  AddProductRepository,
  DeleteProductRepository,
  LoadAllProductRepository,
  LoadOneProductRepository,
  UpdateProductRepository,
} from '../../../../data/protocols/db/product';
import { Product } from '../../../../domain/models/product/product';
import { AddProductModel } from '../../../../domain/usecases/product/add-product/add-product';
import { Injectable } from '@nestjs/common';
@Injectable()
export class ProductPostgresRepository
  implements
    AddProductRepository,
    DeleteProductRepository,
    LoadAllProductRepository,
    LoadOneProductRepository,
    UpdateProductRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async add(product: AddProductModel): Promise<Product> {
    const newProduct = await this.prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        status: product.status,
      },
    });
    return newProduct as unknown as Product;
  }
  async delete(id: number): Promise<string> {
    await this.prisma.product.delete({
      where: { id: Number(id) },
    });
    return 'Product deleted successfully';
  }
  async loadAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products as unknown as Product[];
  }
  async loadOne(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    return product as unknown as Product;
  }
  async update(id: number, info: Partial<Product>): Promise<Product> {
    const updatedProduct = await this.prisma.product.update({
      where: { id },
      data: info,
    });
    return updatedProduct as unknown as Product;
  }
}
