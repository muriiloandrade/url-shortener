import { Controller, Post, Body, Res } from '@nestjs/common';
import { UrlDto } from './dto/UrlDto';
import { UrlService } from './url.service';
import { IUrl } from './interfaces/url.interface';
import { isUri } from 'valid-url';
import { Response } from 'express';
import { generate } from 'shortid';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  /* @Post('shortener')
  async shortener(@Body() url: UrlDto, @Res() res: Response): Promise<IUrl> {
    const urlCode = generate();

    // Continue developing the association logic
    if (isUri(url.longUrl)) {
      try {
        const existingUrl = await this.urlService.findExistingURL(url);

        if (existingUrl) {
          res.json(existingUrl);
        } else {
          const shortURL = `${process.env.BASE_URL}/${urlCode}`;
        }
      } catch (error) {}
    }

    return await this.urlService.associateUrls();
  } */
}
