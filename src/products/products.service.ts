import { Injectable, NotFoundException } from "@nestjs/common";
import {Product} from './product.model';
import { v4 as uuid } from 'uuid';


@Injectable()
export class ProductService {
    private products: Product[] = [];
    insertProduct(name: string, price:number, discount: number) {                 
        const id: string = uuid();

        const newProduct =  new Product(id,name,price,discount);
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
    
    deleteProduct(id : string) {
        const [product,product_index] = this.findProduct(id);
        const before_length = this.products.length;
        if (product_index > -1) {
            this.products.splice(product_index, 1);
        }
          
        if (before_length - this.products.length == 1){
            return 200;
        }
        
        throw new NotFoundException('error during the removal of this product');
    }

    updateProduct(id:string, name:string, price:number, discount: number) {
        const [product,product_index] = this.findProduct(id);

        const to_update_product = {...product};
        var updated = false;
        if (name) {
            to_update_product.name = name;
            updated = true;
        }
        if (price) {
            to_update_product.price = price;
            updated = true;
        }
        if (discount) {
            to_update_product.discount = discount;
            updated = true;
        }

        this.products[product_index] = to_update_product;
        if (updated == false) {
            throw new NotFoundException('product not updated');
        }

        return [to_update_product,200];
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