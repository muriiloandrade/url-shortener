import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUrl } from './interfaces/url.interface';
import { Model } from 'mongoose';
import { UrlDto } from './dto/UrlDto';
import { ProcessUrlDto } from './dto/processUrlDto';

@Injectable()
export class UrlService {
  constructor(@InjectModel('urls') private readonly urlModel: Model<IUrl>) {}

  /* private readonly urls: Url[] = [
    {
      id: '6456423423',
      longUrl:
        'https://www.gearbest.com/table-lamps/pp_009329020454.html?wid=1433363',
      shortUrl: `${process.env.BASE_URL}/AJK43fdja2`,
      urlCode: 'AJK43fdja2',
      created: '11/07/2019 00:00:00',
    },
    {
      id: '24654564764',
      longUrl:
        'https://www.youtube.com/watch?v=wqhNoDE6pb4&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8&index=43',
      shortUrl: `${process.env.BASE_URL}/ASDbnyh7we44`,
      urlCode: 'ASDbnyh7we44',
      created: '11/07/2019 00:05:00',
    },
  ]; */

  async associateUrls(url: IUrl): Promise<IUrl> {
    const newShortUrl = new this.urlModel(url);
    return await newShortUrl.save();
  }

  async findExistingURL(url: UrlDto): Promise<IUrl> {
    return await this.urlModel.findOne({ longUrl: url.longUrl });
  }
}
