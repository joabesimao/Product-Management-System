import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma-service';

@Global() // deixa disponível no app inteiro
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
