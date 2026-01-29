import { Controller, Body, Get, Param } from '@nestjs/common';
import { NestRouteAdapter } from '../adapters/nest-route-adapter';

import { LoadOneProductController } from '../../../presentation/controllers/product/load-one-product/load-one-product-controller';

@Controller('products')
export class LoadOneProductNestController {
  constructor(
    private readonly loadOneProductController: LoadOneProductController,
  ) {}

  @Get(':id')
  loadOneProduct(@Param('id') id: string) {
    return NestRouteAdapter.adapt(this.loadOneProductController, {
      params: { id: Number(id) },
    });
  }
}
