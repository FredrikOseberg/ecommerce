import { Request, Response } from 'express';
import { IServices } from '../interfaces/architecture';
import { IProduct } from '../interfaces/product';
import {
  createRequestSchema,
  createResponseSchema,
} from '../openapi/utils';
import { OpenApiService } from '../services/open-api-service';
import { ProductService } from '../services/product-service';
import { BaseController } from './base-controller';

export class ProductController extends BaseController {
  private productService: ProductService;
  private openApiService: OpenApiService;

  constructor({
    productService,
    openApiService,
  }: Pick<IServices, 'productService' | 'openApiService'>) {
    super();
    this.productService = productService;
    this.openApiService = openApiService;

    this.route({
      path: '/',
      method: 'get',
      handler: this.getProducts,
      middleware: [
        this.openApiService.validate({
          tags: ['products'],
          operationId: 'getProducts',
          responses: { 200: createResponseSchema('productsSchema') },
        }),
      ],
    });

    this.route({
      path: '/:productId',
      method: 'get',
      handler: this.getProduct,
      middleware: [
        this.openApiService.validate({
          tags: ['products'],
          operationId: 'getProduct',
          responses: { 200: createResponseSchema('productSchema') },
        }),
      ],
    });

    this.route({
      path: '/',
      method: 'post',
      handler: this.createProduct,
      middleware: [
        this.openApiService.validate({
          tags: ['products'],
          operationId: 'createProduct',
          requestBody: createRequestSchema('modifyProductSchema'),
          responses: { 200: createResponseSchema('productSchema') },
        }),
      ],
    });

    this.route({
      path: '/:productId',
      method: 'put',
      handler: this.updateProduct,
      middleware: [
        this.openApiService.validate({
          tags: ['products'],
          operationId: 'updateProduct',
          requestBody: createRequestSchema('modifyProductSchema'),
          responses: { 200: createResponseSchema('productSchema') },
        }),
      ],
    });

    this.route({
      path: '/:productId',
      method: 'delete',
      handler: this.deleteProduct,
      middleware: [
        this.openApiService.validate({
          tags: ['products'],
          operationId: 'deleteProduct',
          responses: { 200: createResponseSchema('productSchema') },
        }),
      ],
    });
  }

  getProducts = (req: Request, res: Response) => {
    const products = this.productService.getProducts();

    return res.json(products);
  };

  getProduct = (req: Request, res: Response) => {
    const product = this.productService.getProduct(req.params.productId);
    return res.json(product);
  };

  createProduct = (req: Request, res: Response) => {
    const created = this.productService.createProduct(req.body);
    return res.json(created);
  };

  updateProduct = (req: Request, res: Response) => {
    const updated = this.productService.updateProduct(req.body);
    return res.json(updated);
  };

  deleteProduct = (req: Request, res: Response) => {
    const deleted = this.productService.deleteProduct(
      req.params.productId
    );

    return res.json(deleted);
  };
}
