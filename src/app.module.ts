import { Module } from '@nestjs/common';
import { ProductsModule } from './infra/nest/modules/product-module';
import { PrismaModule } from './infra/nest/modules/prisma-module';
import { AuthModule } from './infra/nest/modules/auth-module';

@Module({
  imports: [PrismaModule, ProductsModule, AuthModule],
})
export class AppModule {}
