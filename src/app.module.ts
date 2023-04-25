import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ContainerModule } from './container/container.module';
import { EirModule } from './eir/eir.module';
import { OperatorModule } from './operator/operator.module';

@Module({
  imports: [AuthModule, ContainerModule, EirModule, OperatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
