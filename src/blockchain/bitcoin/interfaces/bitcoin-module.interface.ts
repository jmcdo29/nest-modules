import { ModuleMetadata, Type } from '@nestjs/common';

export type BitcoinModuleOptions = {
  confirmations: number;
};

export interface BitcoinOptionsFactory {
  createBitcoinOptions(): Promise<BitcoinModuleOptions> | BitcoinModuleOptions;
}

export interface BitcoinModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<BitcoinOptionsFactory>;
  useClass?: Type<BitcoinOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<BitcoinModuleOptions> | BitcoinModuleOptions;
}
