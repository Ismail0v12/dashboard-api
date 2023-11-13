import {NextFunction, Request, Response} from "express";
import {HttpErrorClass} from "./http-error.class";

export interface IExceptionFilter {
  catch: (err: Error | HttpErrorClass, req: Request, res: Response, next: NextFunction) => void;
}