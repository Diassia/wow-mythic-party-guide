import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param, Redirect, Res } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
// import { BattleNetService } from './battleNet.service';
import axios from 'axios';

@Controller()
export class BattleNetController {
  //   constructor(private readonly battleNetService: BattleNetService) {}
  constructor(private readonly httpService: HttpService) {}

  @Get('summary')
  // @Redirect(
  //   `https://oauth.battle.net/authorize?client_id=${process.env.CLIENT_ID}&scope=${process.env.SCOPE}&state=${process.env.STATE}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${process.env.CODE}`,
  //   301,
  // )
  // bankCallbackHandler(@Query() queryString: bankCallbackDto, @Res() res: Response) {
  //   if (...condition) {
  //     return { url: 'https://your.redirection.url.com' };
  //   } else {
  //     return { url: 'https://different.redirection.url.com' };
  //   }
  // }
  async getAccountProfileSummary(@Res() res) {
    const clientID = '1adb78a2e60947ebaed3a4d8325dacb8';
    const scope = 'wow.profile';
    const state = '12345';
    const redirectURI = 'http://localhost:3000/auth_redirect';
    const code = 'code';

    const url = `https://oauth.battle.net/authorize?client_id=${clientID}&scope=${scope}&state=${state}&redirect_uri=${redirectURI}&response_type=${code}`;
    res.redirect(url);
    try {
      // const url = `https://eu.api.blizzard.com/profile/user/wow?namespace=${process.env.NAMESPACE}&locale=${process.env.LOCALE}&access_token=${process.env.TOKEN}`;
      // console.log(url);
      // const response = await axios.get(url);
      // console.log(response);
      // return response;
    } catch (error) {
      console.error(error);
    }
    // @Redirect(url, 301);

    //     console.log('****************');
    //     console.log(this.httpService);
    //     return this.httpService.get(`eu.api.blizzard.com/profile/user/wow
    //     /?${process.env.NAMESPACE}&${process.env.LOCALE}&${process.env.TOKEN}`);

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
