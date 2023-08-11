import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { ClientRepository } from './repositories/client-repository';
import { PrismaClientRepository } from './repositories/prisma/prisma-client-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository,
    },
  ],
})
export class AppModule {}
