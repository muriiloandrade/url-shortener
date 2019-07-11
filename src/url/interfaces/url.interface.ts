import { Document } from 'mongoose';

export interface IUrl extends Document {
  id?: string;
  urlCode?: string;
  longUrl: string;
  shortUrl?: string;
  created?: string;
}
