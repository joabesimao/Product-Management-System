import { AccountModel } from '../../models/account/account';

export interface AddAccountModel {
  name: string;
  email: string;
  password: string;
}

export interface AddAccount {
  add(data: AddAccountModel): Promise<AccountModel>;
}

export const AddAccountToken = 'AddAccountToken';
