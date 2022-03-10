import { BitcoinModuleOptions } from './interfaces/bitcoin-module.interface';
import { BitcoinRpcService } from './bitcoin-rpc/bitcoin-rpc.service';

export class BitcoinService {
  public constructor(
    private readonly client: BitcoinRpcService,
    private readonly options: BitcoinModuleOptions,
  ) {}

  public test(): string {
    return 'Hello World';
  }
}
