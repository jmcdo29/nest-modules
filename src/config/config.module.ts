import { ConfigService } from './config.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [ConfigService],
})
export class ConfigModule {}
