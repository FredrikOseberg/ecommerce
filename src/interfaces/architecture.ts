import { OpenApiService } from '../services/open-api-service';
import { ProductService } from '../services/product-service';
import { ProductStore } from '../stores/product-store';

export interface IStores {
  productStore: ProductStore;
}

export interface IServices {
  productService: ProductService;
  openApiService: OpenApiService;
}
