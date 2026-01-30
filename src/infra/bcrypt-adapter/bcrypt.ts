import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Hasher } from '../../data/protocols/criptography/hasher';
import { HashComparer } from '../../data/protocols/criptography/hash-comparer';

@Injectable()
export class BcryptHasher implements Hasher {
  hash(value: string): Promise<string> {
    return bcrypt.hash(value, 12);
  }
}

@Injectable()
export class BcryptComparer implements HashComparer {
  async compare(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }
}
