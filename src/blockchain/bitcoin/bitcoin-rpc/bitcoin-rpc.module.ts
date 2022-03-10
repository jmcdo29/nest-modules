import { DynamicModule, Module } from '@nestjs/common';
import {
  HttpModule,
  HttpModuleAsyncOptions,
  HttpModuleOptions,
} from '@nestjs/axios';
import { BitcoinRpcService } from './bitcoin-rpc.service';

@Module({
  exports: [BitcoinRpcService],
  providers: [BitcoinRpcService],
})
export class BitcoinRpcModule {
  public static register(options: HttpModuleOptions): DynamicModule {
    return {
      imports: [HttpModule.register(options)],
      module: BitcoinRpcModule,
    };
  }

  public static registerAsync(options: HttpModuleAsyncOptions): DynamicModule {
    return {
      imports: [HttpModule.registerAsync(options)],
      module: BitcoinRpcModule,
    };
  }
}
