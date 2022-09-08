import {
  Router,
  IRouter,
  Request,
  Response,
  RequestHandler,
} from 'express';

interface IRouteOptions extends IRouteOptionsBase {
  method: 'post' | 'put' | 'patch' | 'delete' | 'get';
  path: string;
}

interface IRouteOptionsBase {
  path: string;
  permission: string;
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
  (
    req: Request<P, ResBody, ReqBody, ReqQuery>,
    res: Response<ResBody>
  ): Promise<void> | void;
}

export class BaseController {
  public router: IRouter;

  constructor() {
    this.router = Router();
  }

  route = (options: IRouteOptions) => {
    this.router[options.method](
      options.path,
      this.wrapWithErrorHandling(options.handler)
    );
  };

  wrapWithErrorHandling = (handler: IRequestHandler): IRequestHandler => {
    return async (req: Request, res: Response) => {
      try {
        await handler(req, res);
      } catch (error) {
        console.log(error);
      }
    };
  };
}
