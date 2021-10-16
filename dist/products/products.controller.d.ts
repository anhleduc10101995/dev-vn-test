import { ProductService } from "./products.service";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductService);
    addProduct(name: string, price: number, discount: number): {
        id: string;
    };
    getAllProducts(): import("./product.model").Product[];
    getProduct(id: string): {
        id: string;
        name: string;
        price: number;
        discount: number;
    };
    updateProduct(id: string, name: string, price: number, discount: number): {
        statusCode: number | {
            id: string;
            name: string;
            price: number;
            discount: number;
        };
        object: number | {
            id: string;
            name: string;
            price: number;
            discount: number;
        };
    };
    deleteProduct(id: string): {
        status: number;
    };
}
