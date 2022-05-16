import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Work } from './work.entity';
import { WorkService } from './works.service';

@Resolver(of => Work)
export class WorksResolver {
  constructor(private readonly workService: WorkService) {}

  @Query(returns => [Work])
  async works(): Promise<Work[]> {
    const work = await this.workService.findAll();
    if (!work) {
      throw new NotFoundException();
    }
    return work;
  }
//   async photos(@Args('id') id: string): Promise<Photo[]> {
//     const photo = await this.photosService.findAll();
//     if (!photo) {
//       throw new NotFoundException();
//     }
//     return photo;
//   }
}