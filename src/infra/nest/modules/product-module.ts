// src/infra/nest/modules/products.module.ts

import { Module } from '@nestjs/common';

import {
  AddProductRepositoryToken,
  DeleteProductRepositoryToken,
  LoadAllProductRepositoryToken,
  LoadOneProductRepositoryToken,
} from 'src/data/protocols/db/product';

import { AddProductController } from '../../../presentation/controllers/product/add-product/add-product-controller';
import { LoadAllProductController } from '../../../presentation/controllers/product/load-all-product/load-all-product-controller';

import { AddProductToken } from 'src/domain/usecases/product/add-product/add-product';
import { LoadAllProductToken } from 'src/domain/usecases/product/load-all-product/load-all-product';

import { DbAddProduct } from '../../../data/usecases/product-usecases/add-product/db-add-product';
import { DbLoadAllProduct } from '../../../data/usecases/product-usecases/load-all-product/db-load-all-product';

import { AddProductNestController } from '../controllers/add-product-controller';
import { LoadAllProductNestController } from '../controllers/load-all-product-controller';

import { ProductPostgresRepository } from '../../db/postgres/repositories/product-postgres-repository';
import { PrismaModule } from './prisma-module';
import { DeleteProductToken } from '../../../domain/usecases/product/delete-product/delete-product';
import { LoadOneProductToken } from '../../../domain/usecases/product/load-one-product/load-one-product';
import { DbDeleteProduct } from '../../../data/usecases/product-usecases/delete-product/db-delete-product';
import { DbLoadOneProduct } from '../../../data/usecases/product-usecases/load-one-product/db-load-one-product';
import { DbUpdateProduct } from '../../../data/usecases/product-usecases/update-product/db-update-product';
import { LoadOneProductController } from '../../../presentation/controllers/product/load-one-product/load-one-product-controller';
import { UpdateProductController } from '../../../presentation/controllers/product/update-product/update-product-controller';
import { UpdateProductNestController } from '../controllers/update-product-controller';
import { UpdateProductToken } from '../../../domain/usecases/product/update-product/update-product';
import { DeleteteProductController } from '../../../presentation/controllers/product/delete-product/delete-product-controller';
import { LoadOneProductNestController } from '../controllers/load-one-product-controller';
import { DeleteProductNestController } from '../controllers/delete-product-controller';

@Module({
  imports: [PrismaModule],
  providers: [
    // Repositório concreto
    ProductPostgresRepository,

    // Usecases
    {
      provide: AddProductToken,
      useClass: DbAddProduct,
    },
    {
      provide: LoadAllProductToken,
      useClass: DbLoadAllProduct,
    },

    {
      provide: DeleteProductToken,
      useClass: DbDeleteProduct,
    },
    {
      provide: LoadOneProductToken,
      useClass: DbLoadOneProduct,
    },
    {
      provide: UpdateProductToken,
      useClass: DbUpdateProduct,
    },

    // Repositórios via interface/token
    {
      provide: AddProductRepositoryToken,
      useExisting: ProductPostgresRepository,
    },
    {
      provide: LoadAllProductRepositoryToken,
      useExisting: ProductPostgresRepository,
    },
    {
      provide: LoadOneProductRepositoryToken,
      useExisting: ProductPostgresRepository,
    },
    {
      provide: DeleteProductRepositoryToken,
      useExisting: ProductPostgresRepository,
    },
    {
      provide: DeleteProductRepositoryToken,
      useExisting: ProductPostgresRepository,
    },

    // Controllers PUROS via factory
    {
      provide: AddProductController,
      useFactory: (addProduct: any) => {
        return new AddProductController(addProduct);
      },
      inject: [AddProductToken],
    },

    {
      provide: LoadAllProductController,
      useFactory: (loadAllProduct: any) => {
        return new LoadAllProductController(loadAllProduct);
      },
      inject: [LoadAllProductToken],
    },
    {
      provide: LoadOneProductController,
      useFactory: (loadOneProduct: any) => {
        return new LoadOneProductController(loadOneProduct);
      },
      inject: [LoadOneProductRepositoryToken],
    },
    {
      provide: UpdateProductController,
      useFactory: (updateProduct: any) => {
        return new UpdateProductController(updateProduct);
      },
      inject: [UpdateProductToken],
    },
    {
      provide: DeleteteProductController,
      useFactory: (deleteProduct: any) => {
        return new DeleteteProductController(deleteProduct);
      },
      inject: [DeleteProductToken],
    },
  ],

  controllers: [
    AddProductNestController,
    LoadAllProductNestController,
    LoadOneProductNestController,
    UpdateProductNestController,
    DeleteProductNestController,
  ],
})
export class ProductsModule {}
