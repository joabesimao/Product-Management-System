// src/infra/nest/modules/products.module.ts

import { Module } from '@nestjs/common';

import {
  AddProductRepositoryToken,
  LoadAllProductRepositoryToken,
} from 'src/data/protocols/db/product';

import { AddProductController } from '../../../presentation/controllers/product/add-product/add-product-controller';
import { LoadAllProductController } from '../../../presentation/controllers/product/load-all-product/load-all-product-controller';

import { AddProductToken } from 'src/domain/usecases/product/add-product/add-product';
import { LoadAllProductToken } from 'src/domain/usecases/product/load-all-product/load-all-product';

import { DbAddProduct } from '../../../data/usecases/product-usecases/add-product/db-add-product';
import { DbLoadAllProduct } from '../../../data/usecases/product-usecases/load-all-product/db-load-all-product';

import { ProductNestController } from '../controllers/add-product-controller';
import { LoadAllProductNestController } from '../controllers/load-all-product-controller';

import { ProductPostgresRepository } from '../../db/postgres/repositories/product-postgres-repository';
import { PrismaModule } from './prisma-module';

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

    // Repositórios via interface/token
    {
      provide: AddProductRepositoryToken,
      useExisting: ProductPostgresRepository,
    },
    {
      provide: LoadAllProductRepositoryToken,
      useExisting: ProductPostgresRepository,
    },

    // Controllers PUROS via factory
    {
      provide: AddProductController,
      useFactory: (addProduct: any) => {
        //console.log('FACTORY RECEBEU addProduct =', addProduct);
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
  ],

  controllers: [ProductNestController, LoadAllProductNestController],
})
export class ProductsModule {}
