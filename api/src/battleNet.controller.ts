import { HttpService } from '@nestjs/axios';
import { Controller, Get, Res } from '@nestjs/common';
import { AxiosResponse } from 'axios';
// import { BattleNetService } from './battleNet.service';
import axios from 'axios';

@Controller()
export class BattleNetController {
  //   constructor(private readonly battleNetService: BattleNetService) {}
  constructor(private readonly httpService: HttpService) {}

  @Get('summary')
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

  @Get('/auth/bnet/callback')
  async getCallbackURL() {
    try {
      console.log('HI');
    } catch (error) {
      console.error(error);
    }
  }
}
