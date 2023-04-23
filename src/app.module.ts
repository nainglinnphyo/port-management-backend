import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ContainerModule } from './container/container.module';

@Module({
  imports: [AuthModule, ContainerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
