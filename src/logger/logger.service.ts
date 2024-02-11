import {Logger, ILogObj} from "tslog";
import {ILogger} from "./logger.interface";

export class LoggerService implements ILogger{
  logger: Logger<ILogObj>;

  constructor() {
    this.logger = new Logger({
      hideLogPositionForProduction: true,
      type: "pretty"
    });
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(args);
  }

  error(...args: unknown[]) {
    this.logger.error(args);
  }
}