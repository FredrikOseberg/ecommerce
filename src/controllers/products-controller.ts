import { Router } from 'express';
import { Request, Response } from 'express';
import { IServices } from '../interfaces/architecture';
import { ProductService } from '../services/product-service';

export class ProductController {
  public router: Router;

  private productService: ProductService;

  constructor({ productService }: Pick<IServices, 'productService'>) {
    this.router = Router();
    this.productService = productService;
    this.router.get('/', this.getProducts);
    this.router.get('/:productId', this.getProduct);
    this.router.post('/', this.createProduct);
    this.router.put('/:productId', this.updateProduct);
    this.router.delete('/:productId', this.deleteProduct);
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

    res.json(deleted);
  };
}
