import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { UsersService } from '../users/users.service';

export type DataObject = Record<string, any>;

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
    private userService: UsersService
  ) {}
  
  findAll(): Promise<Contact[]> {

    return this.contactsRepository.find();
  }

  async create (user: object) {
    let contact = new Contact();
    contact.name = "Me and Bears";
    contact.email = "@gmail.com";
    contact.budget = "";
    contact.company = "ff";
    contact.phone = 'fffff';
    contact.details = '';
    contact.subject = '';

    

    
    await this.contactsRepository.save(contact);
    console.log("contact has been saved");

  }

  async update (id: number, contact :DataObject) {
    await this. contactsRepository.update(
      id ,
      contact
    ); 
  }

  findOne(id: string): Promise<Contact> {
    return this.contactsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.contactsRepository.delete(id);
  }
}
