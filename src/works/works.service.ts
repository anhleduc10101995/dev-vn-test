import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Work } from './work.entity';

export type DataObject = Record<string, any>;

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private worksRepository: Repository<Work>,
  ) {}
  
  findAll(): Promise<Work[]> {
    return this.worksRepository.find();
  }
  async create () {
    let work = new Work();
    work.name = "Me and Bears";
    work.description = "I am near polar bears";
    work.filename = "photo-with-bears.jpg";
    work.views = 1;
    work.isPublished = true;
  
    await this.worksRepository.save(work);
    console.log("Photo has been saved");

  }

  async update (id: number, work :DataObject) {
    await this. worksRepository.update(
      id ,
      work
    ); 
  }

  findOne(id: string): Promise<Work> {
    return this.worksRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.worksRepository.delete(id);
  }
}
