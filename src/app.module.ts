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
      password: process.env.DB_PASS,
      database: 'trinity',
      entities: [Photo],
      socketPath: `/cloudsql/hallowed-cortex-343019:northamerica-northeast1:trinity`,
      synchronize: true,
    }),
    PhotosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}