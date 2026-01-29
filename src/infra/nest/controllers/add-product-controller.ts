import { Controller, Post, Body } from '@nestjs/common';
import { NestRouteAdapter } from '../adapters/nest-route-adapter';
import { AddProductController } from '../../../presentation/controllers/product/add-product/add-product-controller';

import type { AddProductModel } from '../../../domain/usecases/product/add-product/add-product';

@Controller('products')
export class AddProductNestController {
  constructor(private readonly addProductController: AddProductController) {}

  @Post()
  addProduct(@Body() body: AddProductModel) {
    return NestRouteAdapter.adapt(this.addProductController, { body });
  }
}
