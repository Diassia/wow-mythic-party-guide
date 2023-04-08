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
import * as fs from 'fs';
import { AxiosResponse } from 'axios';
// import { BattleNetService } from './battleNet.service';
import axios from 'axios';

@Controller()
export class BattleNetController {
  //   constructor(private readonly battleNetService: BattleNetService) {}
  constructor(private readonly httpService: HttpService) {}

  @Get('auth')
  async getAuth(@Res() res) {
    const code = 'code';
    const url = `https://oauth.battle.net/authorize?client_id=${process.env.CLIENT_ID}&scope=${process.env.PROFILE_SCOPE}&state=${process.env.STATE}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${code}`;
    res.redirect(url);
  }

  @Get('auth_redirect')
  async getRedirect(
    @Query() query: { code: string; state: string },
  ): Promise<void> {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_SECRET,
      },
    };

    axios
      .post(
        process.env.TOKEN_URI,
        {
          redirect_uri: process.env.REDIRECT_URI,
          grant_type: 'authorization_code',
          code: query.code,
          scope: 'wow.profile',
        },
        config,
      )
      .then(function (response) {
        console.log(response);
        fs.writeFileSync('./token.txt', String(response.data.access_token));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  @Get('profile-summary')
  async getProfileSummary() {
    const token = fs.readFileSync('./token.txt', 'utf-8');
    console.log(token);
    const url = `https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_EU&access_token=${token}`;

    const res = await axios({
      method: 'get',
      url: url,
    });
    return JSON.stringify(res.data.wow_accounts);
  }
}
