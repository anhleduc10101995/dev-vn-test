import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photosRepository: Repository<Photo>,
  ) {}

  findAll(): Promise<Photo[]> {
    return this.photosRepository.find();
  }
  async create () {
    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    

    await this.photosRepository.save(photo);
    console.log("Photo has been saved");

  }
  findOne(id: string): Promise<Photo> {
    return this.photosRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.photosRepository.delete(id);
  }
}
