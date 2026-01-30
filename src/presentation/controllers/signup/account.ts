import { Controller } from '../../protocols/controller/controller';
import { HttpRequest, HttpResponse } from '../../protocols/http/http';
import { ok, serverError } from '../../helpers/http/http-helper';
import { DbAddAccount } from '../../../data/usecases/account-usescases/add-account/db-add-account';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SignupController implements Controller {
  constructor(private readonly addAccount: DbAddAccount) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const account = await this.addAccount.add(httpRequest.body);
      return ok(account);
    } catch (error) {
      console.error('REAL ERROR =>', error);
      return serverError(error);
    }
  }
}
