import { Controller, Get, Body } from '@nestjs/common';
import { NestRouteAdapter } from '../adapters/nest-route-adapter';
import {} from '../../../presentation/controllers/product/load-all-product/load-all-product-controller';

import { LoadAllProductController } from '../../../presentation/controllers/product/load-all-product/load-all-product-controller';

@Controller('products')
export class LoadAllProductNestController {
  constructor(
    private readonly loadAllProductController: LoadAllProductController,
  ) {}

  @Get()
  loadAllProducts() {
    return NestRouteAdapter.adapt(this.loadAllProductController, {});
  }
}
