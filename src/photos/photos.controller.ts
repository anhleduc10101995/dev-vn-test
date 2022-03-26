import { Controller, Post, Body, Get,Param, Patch, Delete,HttpCode, UploadedFile, UseInterceptors} from "@nestjs/common";
import { PhotosService } from "./photos.service";
import { FileInterceptor } from "@nestjs/platform-express";
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

    @Get('image')
    image() {
        return this.photoService.image();
    }

    @Post('encrypt')
    @UseInterceptors(FileInterceptor('file'))
    encrypt(@UploadedFile() file: Express.Multer.File) {
        return this.photoService.encrypt(file);
    }
}


