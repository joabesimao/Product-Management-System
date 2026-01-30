import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AuthMiddleware } from './auth/auth.middleware';
import { AuthModule } from './infra/nest/modules/auth-module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './infra/nest/modules/prisma-module';
import { ProductsModule } from './infra/nest/modules/product-module';

@Module({
  imports: [PrismaModule, ProductsModule, JwtModule, AuthModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/products');
  }
}
