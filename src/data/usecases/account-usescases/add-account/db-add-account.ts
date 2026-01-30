import { Injectable } from '@nestjs/common';
import { AccountModel } from '../../../../domain/models/account/account';
import {
  AddAccount,
  AddAccountModel,
} from '../../../../domain/usecases/signup/add-account';

import { BcryptHasher } from '../../../../infra/bcrypt-adapter/bcrypt';
import { AccountPostgresRepository } from '../../../../infra/db/postgres/repositories/account-postgres-repository';

@Injectable()
export class DbAddAccount implements AddAccount {
  constructor(
    private readonly hasher: BcryptHasher, // ✅ classe
    private readonly addAccountRepository: AccountPostgresRepository, // ✅ classe
  ) {}

  async add(data: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.hasher.hash(data.password);
    return this.addAccountRepository.add({
      ...data,
      password: hashedPassword,
    });
  }
}
