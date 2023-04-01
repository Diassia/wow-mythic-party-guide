import { HttpService } from '@nestjs/axios';
import {
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
// import { BattleNetService } from './battleNet.service';
import axios from 'axios';

@Controller()
export class BattleNetController {
  //   constructor(private readonly battleNetService: BattleNetService) {}
  constructor(private readonly httpService: HttpService) {}

  @Get('auth')
  async getAccountProfileSummary(@Res() res) {
    const clientID = '1adb78a2e60947ebaed3a4d8325dacb8';
    const scope = 'wow.profile';
    const state = '12345';
    const redirectURI = 'http://localhost:3000/auth_redirect';
    const code = 'code';

    const url = `https://oauth.battle.net/authorize?client_id=${clientID}&scope=${scope}&state=${state}&redirect_uri=${redirectURI}&response_type=${code}`;
    res.redirect(url);

    // Things I need from the API:
    // 1. Player character names x 5
    // 2. Player character class x 5
    // 3. Player mythic stats - level
    // 4. Previous mythic runs
  }

  @Get('auth_redirect')
  getCodeState(@Query() query: { code: string; state: string }): string {
    return `The code is ${query.code}. The state is ${query.state}`;
  }
  // @Header('code', 'state')
  // @Param(code: string, )

  // requestAccessToken(@Param() params): string {
  //   return 'You have been redirected';
  //   // return `The code is ${params.code}`;
  // }
}
