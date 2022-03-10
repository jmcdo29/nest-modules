import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  public bitcoinConfirmation: 8;
  public bitcoinUrl: 'http://localhost:18332';
  public bitcoinUser: 'bitcoinrpc';
  public bitcoinPassword: 'password';
}
