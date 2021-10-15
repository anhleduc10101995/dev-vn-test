import { Product } from './product.model';
export declare class ProductService {
    private products;
    insertProduct(name: string, price: number, discount: number): string;
    fetchProducts(): Product[];
    fetchProduct(id: string): {
        id: string;
        name: string;
        price: number;
        discount: number;
    };
    updateProduct(id: string, name: string, price: number, discount: number): void;
    private findProduct;
}
