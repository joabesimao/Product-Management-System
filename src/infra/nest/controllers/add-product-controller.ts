import { Controller, Post, Body } from '@nestjs/common';
import { NestRouteAdapter } from '../adapters/nest-route-adapter';
import { AddProductController } from '../../../presentation/controllers/product/add-product/add-product-controller';

import type { AddProductModel } from '../../../domain/usecases/product/add-product/add-product';
import { JoiValidationPipe } from '../../pipes/joi-validation-pipe';
import { productSchema } from '../../pipes/validations';

@Controller('products')
export class AddProductNestController {
  constructor(private readonly addProductController: AddProductController) {}

  @Post()
  addProduct(
    @Body(new JoiValidationPipe(productSchema)) body: AddProductModel,
  ) {
    return NestRouteAdapter.adapt(this.addProductController, { body });
  }
}
