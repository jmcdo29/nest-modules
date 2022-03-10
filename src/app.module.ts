import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [BlockchainModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
