import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
const sharp = require("sharp");


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

  async encrypt(file: Express.Multer.File) {
    console.log(file.buffer);
    return file;
    return 'fffff';
  }

  async image() {
    // Read a raw array of pixels and save it to a png
    const input = Uint8Array.from([255, 255, 255, 0, 0, 0]); // or Uint8ClampedArray
    const image = sharp(input, {
      // because the input does not contain its dimensions or how many channels it has
      // we need to specify it in the constructor options
      raw: {
        width: 2,
        height: 1,
        channels: 3
      }
    });
    return await image.toFile('my-two-pixels.png');

  }

  
}
