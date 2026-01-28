import { Controller } from '../../protocols/controller/controller';
import { HttpRequest, HttpResponse } from '../../protocols/http/http';
import { Authentication } from '../../../domain/usecases/authentication/authentication';
import { serverError, unauthorized, ok } from '../../helpers/http/http-helper';

export class LoginController implements Controller {
  constructor(private readonly authentication: Authentication) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { email, password } = httpRequest.body;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const accessToken = await this.authentication.auth({ email, password });
      if (!accessToken) {
        return unauthorized();
      }
      return ok({ accessToken });
    } catch (error) {
      return serverError(error);
    }
  }
}
