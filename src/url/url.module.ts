import { Module } from '@nestjs/common';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlSchema } from './schemas/urlSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'urls', schema: UrlSchema }])],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule {}
