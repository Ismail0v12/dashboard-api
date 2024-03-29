import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";
import { NextFunction, Request, Response } from "express";
import { HttpErrorClass } from "../errors/http-error.class";
import { IUserController } from "./user.controller.interface";
import { injectable } from "inversify";

@injectable()
export class UserController extends BaseController implements IUserController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      { method: "get", path: "/login", func: this.login },
      { method: "post", path: "/register", func: this.register },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HttpErrorClass(401, "Unauthorized", "Login"));
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "Register");
  }
}
