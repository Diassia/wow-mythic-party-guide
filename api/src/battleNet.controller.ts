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
    const code = 'code';
    const url = `https://oauth.battle.net/authorize?client_id=${process.env.CLIENT_ID}&scope=${process.env.PROFILE_SCOPE}&state=${process.env.STATE}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${code}`;
    res.redirect(url);

    // Things I need from the API:
    // 1. Player character names x 5
    // 2. Player character class x 5
    // 3. Player mythic stats - level
    // 4. Previous mythic runs
  }

  @Get('auth_redirect')
  async getCodeState(
    @Query() query: { code: string; state: string },
  ): Promise<string> {
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
      })
      .catch(function (error) {
        console.log(error);
      });
    return `The code is ${query.code}. The state is ${query.state}`;
  }
}
