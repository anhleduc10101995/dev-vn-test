import { Injectable, NotFoundException } from "@nestjs/common";
import {Product} from './product.model';
import { v4 as uuid } from 'uuid';


@Injectable()
export class ProductService {
    private products: Product[] = [];
    insertProduct(name: string, price:number) {                 
        const id: string = uuid();

        const newProduct =  new Product(id,name,price);
        this.products.push(newProduct);
        return id;
    }
    fetchProducts(){
        return [...this.products];
    }

    fetchProduct(id : string) {
        const product = this.findProduct(id)[0];
        return {...product};
    }
    updateProduct(id:string, name:string, price:number) {
        const [product,product_index] = this.findProduct(id);

        const to_update_product = {...product};
        if (name) {
            to_update_product.name = name;
        }
        if (price) {
            to_update_product.price = price;
        }
        this.products[product_index] = to_update_product;
    }
    private findProduct(id:string) : [Product, number]{ 
        const product_index = this.products.findIndex((product) => product.id == id);
        const product = this.products[product_index];
        
        if (!product) {
            throw new NotFoundException('product not identified');
        }
        return [product,product_index];
    }
}  