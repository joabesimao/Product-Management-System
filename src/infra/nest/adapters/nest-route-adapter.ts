import { Controller } from '../../../presentation/protocols/controller/controller';

export class NestRouteAdapter {
  static async adapt(controller: Controller, body: any) {
    const httpResponse = await controller.handle({ body });

    if (httpResponse.statusCode >= 400) {
      throw new Error(httpResponse.body?.message || 'Erro');
    }

    return httpResponse.body;
  }
}
