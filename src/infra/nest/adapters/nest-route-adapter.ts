import { Controller } from '../../../presentation/protocols/controller/controller';
import { HttpRequest } from '../../../presentation/protocols/http/http';

export class NestRouteAdapter {
  static async adapt(controller: Controller, request: HttpRequest) {
    const httpRequest: HttpRequest = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      body: request.body,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      params: request.params,
    };

    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.statusCode >= 400) {
      throw new Error('Erro');
    }

    return httpResponse.body;
  }
}
