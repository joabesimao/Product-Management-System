import {
  Authentication,
  AuthenticationModel,
} from '../../../domain/usecases/authentication/authentication';
import { LoadAccountByEmailRepository } from '../../../data/protocols/authentication/load-account-by-email';
import { Encrypter } from '../../../data/protocols/criptography/encrypter';
import { HashComparer } from '../../../data/protocols/criptography/hash-comparer';
import { UpdateAccessTokenRepository } from '../../protocols/db/access-token-repository/update-acess-token';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashCompare: HashComparer,
    private readonly encryter: Encrypter,
    private readonly updateAccessToken: UpdateAccessTokenRepository,
  ) {}

  async auth(authentication: AuthenticationModel): Promise<string> {
    const accountBd =
      await this.loadAccountByEmailRepository.loadAccountByEmail(
        authentication.email,
      );
    if (accountBd) {
      const isValid = await this.hashCompare.compare(
        authentication.password,
        accountBd.password,
      );
      if (isValid) {
        const token = await this.encryter.encrypt(String(accountBd.id));
        await this.updateAccessToken.updateAccessToken(accountBd.id, {
          accessToken: token,
        });
        return token;
      }
    }
    return null as any;
  }
}
