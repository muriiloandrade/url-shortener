import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { UrlService } from './url.service';
import { isUri } from 'valid-url';
import { Response } from 'express';
import { generate } from 'shortid';
import { ProcessUrlDto } from './dto/processUrlDto';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shortener')
  async shortener(
    @Body() url: ProcessUrlDto,
    @Res() res: Response,
  ): Promise<Response> {
    url.urlCode = generate();

    if (isUri(url.longUrl)) {
      try {
        const existingUrl = await this.urlService.findExistingURL(url);
        if (existingUrl) {
          return res.json(existingUrl);
        } else {
          url.shortUrl = `${process.env.BASE_URL}/${url.urlCode}`;
          const urlObj = await this.urlService.associateUrls(url);
          return res.json(urlObj);
        }
      } catch (error) {
        return res.status(HttpStatus.SERVICE_UNAVAILABLE).json(error.message);
      }
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json('URL passada é inválida!');
    }
  }
}
