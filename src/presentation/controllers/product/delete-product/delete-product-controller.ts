import { DeleteProductById } from '../../../../domain/usecases/product/delete-product/delete-product';
import { ok, serverError } from '../../../helpers/http/http-helper';
import { Controller } from '../../../protocols/controller/controller';
import { HttpRequest, HttpResponse } from '../../../protocols/http/http';

export class DeleteteProductController implements Controller {
  constructor(private readonly deleteProduct: DeleteProductById) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const deleteProduct = await this.deleteProduct.delete(
        httpRequest.body.id,
      );
      return ok(deleteProduct);
    } catch (error) {
      return serverError(error);
    }
  }
}
