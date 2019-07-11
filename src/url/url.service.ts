import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUrl } from './interfaces/url.interface';
import { Model } from 'mongoose';
import { ProcessUrlDto } from './dto/processUrlDto';

@Injectable()
export class UrlService {
  constructor(@InjectModel('urls') private readonly urlModel: Model<IUrl>) {}

  async associateUrls(url: ProcessUrlDto): Promise<IUrl> {
    const newShortUrl = new this.urlModel(url);
    return await newShortUrl.save();
  }

  async findExistingURL(url: ProcessUrlDto): Promise<IUrl> {
    return await this.urlModel.findOne({ longUrl: url.longUrl });
  }
}
