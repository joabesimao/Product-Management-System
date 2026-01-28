import { Module } from '@nestjs/common';
import { ProductsModule } from './infra/nest/modules/product-module';
import { PrismaModule } from './infra/nest/modules/prisma-module';

@Module({
  imports: [PrismaModule, ProductsModule],
})
export class AppModule {}
