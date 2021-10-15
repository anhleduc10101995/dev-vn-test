"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
const uuid_1 = require("uuid");
let ProductService = class ProductService {
    constructor() {
        this.products = [];
    }
    insertProduct(name, price) {
        const id = (0, uuid_1.v4)();
        const newProduct = new product_model_1.Product(id, name, price);
        this.products.push(newProduct);
        return id;
    }
    fetchProducts() {
        return [...this.products];
    }
    fetchProduct(id) {
        const product = this.findProduct(id)[0];
        return Object.assign({}, product);
    }
    updateProduct(id, name, price) {
        const [product, product_index] = this.findProduct(id);
        const to_update_product = Object.assign({}, product);
        if (name) {
            to_update_product.name = name;
        }
        if (price) {
            to_update_product.price = price;
        }
        this.products[product_index] = to_update_product;
    }
    findProduct(id) {
        const product_index = this.products.findIndex((product) => product.id == id);
        const product = this.products[product_index];
        if (!product) {
            throw new common_1.NotFoundException('product not identified');
        }
        return [product, product_index];
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map