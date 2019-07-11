import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUrl } from './url/interfaces/url.interface';

@Injectable()
export class AppService {
  constructor(@InjectModel('urls') private readonly urlModel: Model<IUrl>) {}

  async findByCode(code: string): Promise<IUrl> {
    return await this.urlModel.findOne({ urlCode: code });
  }
}
