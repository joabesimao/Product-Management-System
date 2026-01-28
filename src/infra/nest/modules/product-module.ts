// src/infra/nest/modules/products.module.ts
import { Module } from '@nestjs/common';
import { ProductNestController } from '../controllers/add-product-controller';
import { ProductPostgresRepository } from '../../db/postgres/repositories/product-postgres-repository';
import { DbAddProduct } from '../../../data/usecases/product-usecases/add-product/db-add-product';
import { AddProductController } from '../../../presentation/controllers/product/add-product/add-product-controller';
import { LoadAllProductNestController } from '../controllers/load-all-product-controller';
import { DbLoadAllProduct } from '../../../data/usecases/product-usecases/load-all-product/db-load-all-product';
import { LoadAllProductController } from '../../../presentation/controllers/product/load-all-product/load-all-product-controller';

@Module({
  controllers: [ProductNestController, LoadAllProductNestController],
  providers: [
    ProductPostgresRepository,
    DbAddProduct,
    DbLoadAllProduct,
    AddProductController,
    LoadAllProductController,
  ],
})
export class ProductsModule {}
