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
    deleteProduct(id: string): number;
    updateProduct(id: string, name: string, price: number, discount: number): (number | {
        id: string;
        name: string;
        price: number;
        discount: number;
    })[];
    private findProduct;
}
