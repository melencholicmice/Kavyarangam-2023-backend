import { Request, Response, NextFunction } from "express";

const notFound = async (req: Request, resp: Response, next: NextFunction) => {
  const error = new Error(`Not Found ${req.originalUrl}`);
  resp.status(404);
  next(error);
};

const errorHandler = (
  err: any,
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const statusCode = resp.statusCode === 200 ? 500 : resp.statusCode;
  resp.status(statusCode);
  resp.json({ success: false, message: err.message });
};

export { notFound, errorHandler };
