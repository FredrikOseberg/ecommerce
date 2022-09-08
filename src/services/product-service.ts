import { IProduct } from '../interfaces/product';
import { IStores } from '../interfaces/architecture';
import { ProductStore } from '../stores/product-store';

export class ProductService {
  private productStore: ProductStore;

  constructor({ productStore }: Pick<IStores, 'productStore'>) {
    this.productStore = productStore;
  }

  public getProducts = () => {
    return this.productStore.getAll();
  };

  public getProduct = (productId: string) => {
    return this.productStore.getById(productId);
  };

  public createProduct = (product: IProduct) => {
    return this.productStore.create(product);
  };

  public updateProduct = (updatedProduct: IProduct) => {
    return this.productStore.update(updatedProduct);
  };

  public deleteProduct = (productId: string) => {
    return this.productStore.delete(productId);
  };
}
