import {Server} from "http";
import express, {Express} from "express";
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./users/user.controller";
import {ExceptionFilter} from "./errors/exception.filter";

export class App {
  public server: Server;
  public port: number;
  public app: Express;
  public logger: LoggerService;
  public userController: UserController;
  public exceptionFilter: ExceptionFilter;

  constructor(logger: LoggerService, userController: UserController, exceptionFilter: ExceptionFilter) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController
    this.exceptionFilter = exceptionFilter
  }

  userRoutes() {
    this.app.use(this.userController.router);
  }

  useExceptions() {
    this.app.use(this.exceptionFilter.catch.bind(this));
  }

  async init() {
    this.userRoutes();
    this.useExceptions();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server has been start in http://localhost:${this.port}`);
  }
}