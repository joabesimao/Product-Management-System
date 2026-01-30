import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../controllers/auth-controllers';
import { PrismaService } from '../../db/prisma/prisma-service';
import { AccountPostgresRepository } from '../../db/postgres/repositories/account-postgres-repository';
import { BcryptComparer, BcryptHasher } from '../../bcrypt-adapter/bcrypt';
import { DbAddAccount } from '../../../data/usecases/account-usescases/add-account/db-add-account';
import { DbAuthentication } from '../../../data/usecases/authentication-usecases/db-authentication';
import { SignupController } from '../../../presentation/controllers/signup/account';
import { LoginController } from '../../../presentation/controllers/login/login-controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'dev-secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    PrismaService,

    // infra
    AccountPostgresRepository,
    BcryptHasher,
    BcryptComparer,

    // use cases
    DbAddAccount,
    DbAuthentication,

    // clean controllers
    SignupController,
    LoginController,
  ],
})
export class AuthModule {}
