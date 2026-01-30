import { Controller } from '../../protocols/controller/controller';
import { HttpRequest, HttpResponse } from '../../protocols/http/http';
import { serverError, unauthorized, ok } from '../../helpers/http/http-helper';
import { DbAuthentication } from '../../../data/usecases/authentication-usecases/db-authentication';
import { Injectable } from '@nestjs/common';
@Injectable()
export class LoginController implements Controller {
  constructor(private readonly authentication: DbAuthentication) {}
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
