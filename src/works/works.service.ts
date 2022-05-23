import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Work } from './work.entity';
import { UsersService } from '../users/users.service';

export type DataObject = Record<string, any>;

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private worksRepository: Repository<Work>,
    private userService: UsersService
  ) {}
  
  findAll(): Promise<Work[]> {

    return this.worksRepository.find({
        relations: ['user']
      }      
    );
  }

  async create (user: object) {
    let work = new Work();
    work.name = "Me and Bears";
    work.description = "I am near polar bears";
    work.filename = "photo-with-bears.jpg";
    work.views = 1;
    work.isPublished = true;
    work.thumbnail = '';
    work.title = '';

    
    const foundUser = await this.userService.findOne((user as User).id);
   
    console.log(foundUser);

    work.user = foundUser;
    
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
