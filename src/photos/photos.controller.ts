import { Controller, Post, Body, Get,Param, Patch, Delete,HttpCode } from "@nestjs/common";
import { PhotosService } from "./photos.service";

@Controller('photos')
export class PhotosController {
    constructor(private photoService:PhotosService){}
    @Post('create')
    create() { 
        console.log("create");
        const _id = this.photoService.create();        
        return {id : _id};  
    }
    @Get('findAll')
    findAll() {
        return this.photoService.findAll();
    }

}