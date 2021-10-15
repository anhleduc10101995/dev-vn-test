import { ProductService } from "./products.service";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductService);
    addProduct(name: string, price: number): any;
    getAllProducts(): import("./product.model").Product[];
    getProduct(id: string): {
        id: string;
        name: string;
        price: number;
    };
    updateProduct(id: string, name: string, price: number): void;
}
