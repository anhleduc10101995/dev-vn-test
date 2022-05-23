import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Contact } from './contact.entity';
import { ContactService } from './contacts.service';

@Resolver(of => Contact)
export class ContactsResolver {
  constructor(private readonly contactService: ContactService) {}

  @Query(returns => [Contact])
  async contacts(): Promise<Contact[]> {
    const contacts = await this.contactService.findAll();
    
    
    if (!contacts) {
      throw new NotFoundException();
    }
    return contacts;
  }
//   async photos(@Args('id') id: string): Promise<Photo[]> {
//     const photo = await this.photosService.findAll();
//     if (!photo) {
//       throw new NotFoundException();
//     }
//     return photo;
//   }
}