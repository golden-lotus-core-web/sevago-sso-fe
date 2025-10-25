import { HttpStatusCode } from 'axios';

export interface Error {
  message: string;
  statusCode: HttpStatusCode | number;
}
