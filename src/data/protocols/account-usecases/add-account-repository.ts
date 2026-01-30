import { AddAccountModel } from '../../../domain/usecases/signup/add-account';
import { AccountModel } from '../../../domain/models/account/account';

export interface AddAccountRepository {
  add(data: AddAccountModel): Promise<AccountModel>;
}
