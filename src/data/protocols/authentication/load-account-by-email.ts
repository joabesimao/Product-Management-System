import { AccountModel } from '../../../domain/models/account/account';

export interface LoadAccountByEmailRepository {
  loadAccountByEmail(email: string): Promise<AccountModel | null>;
}
