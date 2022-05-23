import { Module, Global } from '@nestjs/common';
import { Contact } from './contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './contacts.controller';
import { ContactService } from './contacts.service';
import { ContactsResolver } from './contacts.resolver';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Contact]),
  UsersModule],
  providers: [ContactService, ContactsResolver],
  controllers: [ContactsController],
})
export class ContactsModule {}
