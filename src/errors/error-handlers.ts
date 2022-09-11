import { Request, Response, NextFunction } from 'express';

interface IError {
  status?: number;
  message?: string;
  validationErrors?: IValidationErrors[];
}

interface IValidationErrors {
  keyword: string;
  dataPath: string;
  schemaPath: string;
  params: { [key: string]: string };
  message: string;
}

export const errorHandler = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err && err.status && err.validationErrors) {
    res.status(err.status).json({
      message: err.message,
      validation: err.validationErrors,
    });
    return;
  } else if (err) {
    res.status(400).json({ message: 'Bad request' });
    return;
  } else {
    next(err);
  }
};
