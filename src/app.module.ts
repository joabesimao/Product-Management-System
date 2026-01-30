import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProductsModule } from './infra/nest/modules/product-module';
import { PrismaModule } from './infra/nest/modules/prisma-module';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './auth/auth.middleware';
import { AuthModule } from './infra/nest/modules/auth-module';

@Module({
  imports: [PrismaModule, ProductsModule, JwtModule, AuthModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/products');
  }
}
