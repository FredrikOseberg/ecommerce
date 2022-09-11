import openapi, { IExpressOpenApi } from '@wesleytodd/openapi';
import { RequestHandler } from 'express';
import { OpenAPIV3 } from 'openapi-types';
import { createOpenApiSchema } from '../openapi';

type OpenApiTags = 'products';

interface ApiOperation<Tag = OpenApiTags>
  extends Omit<OpenAPIV3.OperationObject, 'tags'> {
  operationId: string;
  tags: [Tag];
}

export class OpenApiService {
  private api: IExpressOpenApi;

  constructor() {
    this.api = openapi('http://localhost:3000', createOpenApiSchema(), {
      coerce: true,
    });
  }

  validate(operation: ApiOperation): RequestHandler {
    return this.api.validPath(operation);
  }
}
