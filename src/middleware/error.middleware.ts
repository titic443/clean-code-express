import { NextFunction, Request } from "express";
import { Response } from "express";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
};
