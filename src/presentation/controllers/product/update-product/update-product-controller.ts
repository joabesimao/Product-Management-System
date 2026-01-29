/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { UpdateProduct } from '../../../../domain/usecases/product/update-product/update-product';
import { ok, serverError } from '../../../helpers/http/http-helper';
import { Controller } from '../../../protocols/controller/controller';
import { HttpRequest, HttpResponse } from '../../../protocols/http/http';

export class UpdateProductController implements Controller {
  constructor(private readonly updateProduct: UpdateProduct) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const updateProduct = await this.updateProduct.update(
        httpRequest.body.id,
        httpRequest.body,
      );
      return ok(updateProduct);
    } catch (error) {
      return serverError(error);
    }
  }
}
