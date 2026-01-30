import { Injectable } from '@nestjs/common';
import { LoadAccountByEmailRepository } from '../../../../data/protocols/authentication/load-account-by-email';
import { AddAccountRepository } from '../../../../data/protocols/account-usecases/add-account-repository';
import { AccountModel } from '../../../../domain/models/account/account';
import { PrismaService } from '../../prisma/prisma-service';
import { AddAccountModel } from '../../../../domain/usecases/signup/add-account';

@Injectable()
export class AccountPostgresRepository
  implements AddAccountRepository, LoadAccountByEmailRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async add(data: AddAccountModel): Promise<AccountModel> {
    const account = await this.prisma.account.create({
      data,
    });

    return account;
  }

  async loadAccountByEmail(email: string): Promise<AccountModel | null> {
    return await this.prisma.account.findUnique({
      where: { email },
    });
  }
}
