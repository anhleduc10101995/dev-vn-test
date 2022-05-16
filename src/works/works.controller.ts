import { Controller, Post, Body, Get,Param, Patch, Delete,HttpCode } from "@nestjs/common";
import { WorkService } from "./works.service";

@Controller('works')
export class WorksController {
    constructor(private workService:WorkService){}
    @Post('create')
    create(@Body('key') key:string) {         
        if (key == 'hallowed-cortex-343019'){
            console.log("create");
            console.log(key);
            const _id = this.workService.create();
            return {id : _id};
        }

        return null; 
    }

    @Post('update')
    update(@Body('key') key:string,
    @Body('data') data:object,
    @Body('id') id:number
    ) {         
        if (key == 'hallowed-cortex-343019'){
            console.log("create");
            console.log(key);
            const _id = this.workService.update(id, data);
            return {id : _id};
        }
    
        return null; 
    }

    @Get('findAll')
    findAll() {
        return this.workService.findAll();
    }

}