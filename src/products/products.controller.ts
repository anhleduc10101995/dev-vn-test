import { Controller, Post, Body, Get,Param, Patch, Delete } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private productsService:ProductService){}
    @Post()
    addProduct(@Body('name') name:string,@Body('price') price:number) : any {        
        const prodID = this.productsService.insertProduct(name,price);        
        return {id : prodID};  
    }
    @Get()
    getAllProducts() {
        return this.productsService.fetchProducts();
    }
    
    @Get(':id')
    getProduct(@Param('id') id : string) {         
        return this.productsService.fetchProduct(id);
    }
    @Patch(':id')
    updateProduct(
        @Param('id') id : string,
        @Body('name') name:string,
        @Body('price') price:number,            
    ){ 
        this.productsService.updateProduct(id,name,price);
    }
}