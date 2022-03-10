import { ConfigService } from './../config/config.service';
import { Module } from '@nestjs/common';
import { BitcoinModule } from './bitcoin/bitcoin.module';

@Module({
  imports: [
    BitcoinModule.registerAsync(
      {
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          return {
            confirmations: configService.bitcoinConfirmation,
          };
        },
      },
      {
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          auth: {
            password: configService.bitcoinPassword,
            username: configService.bitcoinUser,
          },
          baseURL: configService.bitcoinUrl,
          timeout: 30000,
        }),
      },
    ),
  ],
  exports: [BitcoinModule],
})
export class BlockchainModule {}
