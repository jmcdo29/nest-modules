import { BitcoinRpcService } from './bitcoin-rpc/bitcoin-rpc.service';
import { BitcoinService } from './bitcoin.service';
import { BITCOIN_MODULE_OPTIONS } from './constants';
import { HttpModuleOptions } from '@nestjs/axios';
import {
  Module,
  DynamicModule,
  HttpModuleAsyncOptions,
  Provider,
} from '@nestjs/common';
import { BitcoinRpcModule } from './bitcoin-rpc/bitcoin-rpc.module';
import {
  BitcoinModuleOptions,
  BitcoinModuleAsyncOptions,
  BitcoinOptionsFactory,
} from './interfaces/bitcoin-module.interface';

@Module({
  // imports: [BitcoinRpcModule],
  exports: [BitcoinService],
  providers: [
    {
      inject: [BitcoinRpcService, BITCOIN_MODULE_OPTIONS],
      provide: BitcoinService,
      useFactory: (
        client: BitcoinRpcService,
        options: BitcoinModuleOptions,
      ) => {
        return new BitcoinService(client, options);
      },
    },
  ],
})
export class BitcoinModule {
  public static register(
    options: BitcoinModuleOptions,
    clientOptions: HttpModuleOptions,
  ): DynamicModule {
    return {
      imports: [BitcoinRpcModule.register(clientOptions)],
      module: BitcoinModule,
      providers: [
        {
          provide: BITCOIN_MODULE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }

  public static registerAsync(
    options: BitcoinModuleAsyncOptions,
    clientOptions: HttpModuleAsyncOptions,
  ): DynamicModule {
    const imports = options.imports || [];

    return {
      imports: [...imports, BitcoinRpcModule.registerAsync(clientOptions)],
      module: BitcoinModule,
      providers: [this.createAsyncProviders(options)],
    };
  }

  private static createAsyncProviders(
    options: BitcoinModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        inject: options.inject || [],
        provide: BITCOIN_MODULE_OPTIONS,
        useFactory: options.useFactory,
      };
    }

    return {
      inject: [options.useExisting || options.useClass],
      provide: BITCOIN_MODULE_OPTIONS,
      useFactory: async (optionsFactory: BitcoinOptionsFactory) =>
        optionsFactory.createBitcoinOptions(),
    };
  }
}
