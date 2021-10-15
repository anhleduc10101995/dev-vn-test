import { Controller, Post, Body, Get,Param, Patch, Delete } from "@nestjs/common";

@Controller('dummy')
export class DummyController {
    @Get()
    dummy() { 
        return 'working alive';
    }
}