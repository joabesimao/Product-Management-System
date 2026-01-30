import { JwtService } from '@nestjs/jwt';
import {
  Authentication,
  AuthenticationModel,
} from '../../../domain/usecases/authentication/authentication';
import { BcryptComparer } from '../../../infra/bcrypt-adapter/bcrypt';
import { AccountPostgresRepository } from '../../../infra/db/postgres/repositories/account-postgres-repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class DbAuthentication implements Authentication {
  constructor(
    private readonly accountRepository: AccountPostgresRepository,
    private readonly hashComparer: BcryptComparer,
    private readonly jwtService: JwtService,
  ) {}

  async auth(authentication: AuthenticationModel): Promise<string | null> {
    const account = await this.accountRepository.loadAccountByEmail(
      authentication.email,
    );

    if (!account) return null;

    const isValid = await this.hashComparer.compare(
      authentication.password,
      account.password,
    );

    if (!isValid) return null;

    return this.jwtService.sign(
      { sub: account.id },
      {
        secret: process.env.JWT_SECRET || 'dev-secret',
      },
    );
  }
}
