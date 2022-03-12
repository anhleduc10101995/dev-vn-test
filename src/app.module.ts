import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/photo.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      socketPath: '/cloudsql/hallowed-cortex-343019:northamerica-northeast1:trinity',
      username: 'trinity',
      password: '1234',
      database: 'trinity',
      entities: [Photo],
      synchronize: true,
    }),
    PhotosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}