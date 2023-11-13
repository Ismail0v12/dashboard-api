import {LoggerService} from "../logger/logger.service";
import {IExceptionFilter} from "./exception.filter.interface";
import {Request, Response, NextFunction} from "express"
import {HttpErrorClass} from "./http-error.class";

export class ExceptionFilter implements IExceptionFilter {
  logger: LoggerService

  constructor(logger: LoggerService) {
    this.logger = logger;
  }

  catch(error: Error | HttpErrorClass, req: Request, res: Response, next: NextFunction) {
    if (error instanceof HttpErrorClass) {
      this.logger.error(`Ошибка ${error.context} [${error.statusCode}]: ${error.message}`);
      res.sendStatus(error.statusCode).json({error: error.message});
    } else {
      this.logger.error(`Ошибка: ${error.message}`);
    }
  }

}