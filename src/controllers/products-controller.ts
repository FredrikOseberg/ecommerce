import { Request, Response } from 'express';
import { IServices } from '../interfaces/architecture';
import { IProduct } from '../interfaces/product';
import { ProductService } from '../services/product-service';
import { BaseController } from './base-controller';

export class ProductController extends BaseController {
  private productService: ProductService;

  constructor({ productService }: Pick<IServices, 'productService'>) {
    super();
    this.productService = productService;

    this.route({ path: '/', method: 'get', handler: this.getProducts });
    this.route({
      path: '/:productId',
      method: 'get',
      handler: this.getProduct,
    });
    this.route({
      path: '/',
      method: 'post',
      handler: this.createProduct,
    });
    this.route({
      path: '/:productId',
      method: 'put',
      handler: this.updateProduct,
    });
    this.route({
      path: '/:productId',
      method: 'delete',
      handler: this.deleteProduct,
    });
  }

  getProducts = async (req: Request, res: Response) => {
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
