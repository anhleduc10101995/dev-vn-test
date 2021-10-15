import { Module } from "@nestjs/common";
import { DummyController } from "./dummy.controller";
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";

@Module({
  controllers:[ProductsController,DummyController],
  providers:[ProductService]

})

export class ProductsModule{}