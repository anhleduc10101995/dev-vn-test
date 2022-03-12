import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/photo.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: 'aHJ4kLhfeMPo7f6s',
      database: 'trinity',
      entities: [Photo],
      host:'34.95.30.55',
      port: 3306, 
      synchronize: true,
    }),
    PhotosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}