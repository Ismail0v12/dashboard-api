import {Router, Response, Request, NextFunction} from "express";

export interface IControllerRoute {
  path: string;
  method: keyof Pick<Router, "get" | "put" | "patch" | "delete" | "post">;
  func: ( req: Request, res: Response, next: NextFunction) => void;
}