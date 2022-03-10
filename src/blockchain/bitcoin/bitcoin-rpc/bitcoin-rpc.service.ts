import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class BitcoinRpcService {
  public constructor(private readonly httpService: HttpService) {}
}
