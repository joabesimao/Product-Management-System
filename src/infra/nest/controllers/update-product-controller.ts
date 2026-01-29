import { Controller, Body, Put, Param } from '@nestjs/common';
import { NestRouteAdapter } from '../adapters/nest-route-adapter';

import type { UpdateProduct } from '../../../domain/usecases/product/update-product/update-product';
import { UpdateProductController } from '../../../presentation/controllers/product/update-product/update-product-controller';

@Controller('products')
export class UpdateProductNestController {
  constructor(
    private readonly updateProductController: UpdateProductController,
  ) {}

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() body: UpdateProduct) {
    return NestRouteAdapter.adapt(this.updateProductController, {
      body: { ...body, id: Number(id) },
    });
  }
}
