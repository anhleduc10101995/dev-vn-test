import { Controller, Post, Body, Get,Param, Patch, Delete,HttpCode } from "@nestjs/common";
import { ContactService } from "./contacts.service";

@Controller('contacts')
export class ContactsController {
    constructor(private contactService:ContactService){}
    @Post('create')
    create(@Body('key') key:string, @Body('user') user:object) {         
        if (key == 'hallowed-cortex-343019'){                        
            const _id = this.contactService.create(user);
            return {id : _id};
        }

        return null; 
    }

    @Post('update')
    update(
        @Body('key') key:string,
        @Body('data') data:object,
        @Body('id') id:number
    ) {         
        if (key == 'hallowed-cortex-343019'){
            console.log("create");
            console.log(key);
            const _id = this.contactService.update(id, data);
            return {id : _id};
        }
    
        return null; 
    }

    @Get('findAll')
    findAll() {
        return this.contactService.findAll();
    }

}