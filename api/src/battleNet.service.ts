import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class BattleNetService {
  //   constructor(private readonly httpService: HttpService) {}
  //   getAccountProfileSummary(
  //     namespace: string,
  //     locale: string,
  //     accessToken: string,
  //   ): Observable<AxiosResponse<string>> {
  //     return this.httpService.get(`/?${namespace}&${locale}&${accessToken}`);
  //   }
}
