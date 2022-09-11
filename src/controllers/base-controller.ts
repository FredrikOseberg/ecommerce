import {
  Router,
  IRouter,
  Request,
  Response,
  RequestHandler,
} from 'express';
import { formatError, handleErrors } from '../util';

interface IRouteOptions extends IRouteOptionsBase {
  method: 'post' | 'put' | 'patch' | 'delete' | 'get';
  path: string;
}

interface IRouteOptionsBase {
  path: string;
  middleware?: RequestHandler[];
  handler: IRequestHandler;
  acceptedContentTypes?: string[];
}

interface IRequestHandler<
  P = any,
  ResBody = any,
  ReqBody = any,
  ReqQuery = any
> {
  (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>):
    | Promise<void>
    | void
    | unknown;
}

export class BaseController {
  public router: IRouter;

  constructor() {
    this.router = Router();
  }

  route = (options: IRouteOptions) => {
    this.router[options.method](
      options.path,
      options.middleware ? options.middleware : [],
      this.wrapWithErrorHandling(options.handler)
    );
  };

  wrapWithErrorHandling = (handler: IRequestHandler): IRequestHandler => {
    return async (req: Request, res: Response) => {
      try {
        await handler(req, res);
      } catch (error: unknown) {
        const formattedError = formatError(error);

        handleErrors(res, formattedError);
      }
    };
  };
}
