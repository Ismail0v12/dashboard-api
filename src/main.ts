import { App } from "./app";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/user.controller";
import { ExceptionFilter } from "./errors/exception.filter";
import { Container, ContainerModule, interfaces } from "inversify";
import { ILogger } from "./logger/logger.interface";
import { TYPES } from "../types";

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILogger>(TYPES.ILogger).to(LoggerService);
  bind<UserController>(TYPES.UserController).to(UserController);
  bind<ExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
  bind<App>(TYPES.Application).to(App);
});

function bootstrap() {
  const appContainer = new Container();
  appContainer.load(appBindings);
  const app = appContainer.get<App>(TYPES.Application);
  app.init();
  return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
