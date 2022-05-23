import { Controller, Post, Body, Get,Param, Patch, Delete,HttpCode } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Post('create')
    create() { 
        console.log("create");
        const _id = this.userService.create();        
        return {id : _id};  
    }
    @Get('findAll')
    findAll() {
        return this.userService.findAll();
    }

}