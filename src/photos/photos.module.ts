import { Module, Global } from '@nestjs/common';
import { Photo } from './photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotosService],
  controllers: [PhotosController],

})
export class PhotosModule {}


