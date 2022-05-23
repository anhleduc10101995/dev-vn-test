import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => [User])
  async users(): Promise<User[]> {
    const user = await this.usersService.findAll();
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
//   async photos(@Args('id') id: string): Promise<Photo[]> {
//     const photo = await this.photosService.findAll();
//     if (!photo) {
//       throw new NotFoundException();
//     }
//     return photo;
//   }
}