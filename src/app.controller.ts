import { BitcoinService } from './blockchain/bitcoin/bitcoin.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly bitcoinService: BitcoinService) {}

  @Get()
  getHello(): string {
    return this.bitcoinService.test();
  }
}
