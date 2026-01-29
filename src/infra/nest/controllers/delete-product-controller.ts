import { Controller, Body, Delete, Param } from '@nestjs/common';
import { NestRouteAdapter } from '../adapters/nest-route-adapter';

import { DeleteteProductController } from '../../../presentation/controllers/product/delete-product/delete-product-controller';

@Controller('products')
export class DeleteProductNestController {
  constructor(
    private readonly deleteProductController: DeleteteProductController,
  ) {}

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return NestRouteAdapter.adapt(this.deleteProductController, {
      body: { id: Number(id) },
    });
  }
}
