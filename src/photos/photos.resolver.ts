import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Photo } from './photo.entity';
import { PhotosService } from './photos.service';

@Resolver(of => Photo)
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) {}

  @Query(returns => [Photo])
  async photos(): Promise<Photo[]> {
    const photo = await this.photosService.findAll();
    if (!photo) {
      throw new NotFoundException();
    }
    return photo;
  }
//   async photos(@Args('id') id: string): Promise<Photo[]> {
//     const photo = await this.photosService.findAll();
//     if (!photo) {
//       throw new NotFoundException();
//     }
//     return photo;
//   }
}