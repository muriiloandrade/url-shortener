import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':code')
  async redirectToUrl(
    @Param('code') code: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const url = await this.appService.findByCode(code);

      if (url) {
        return res.redirect(HttpStatus.PERMANENT_REDIRECT, url.longUrl);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json('Esse link não existe!');
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json('Erro no servidor!');
    }
  }
}
