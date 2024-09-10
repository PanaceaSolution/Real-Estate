import { StatusCodes } from 'http-status-codes';
import {CustomError} from './custom-api.js';

export class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}


