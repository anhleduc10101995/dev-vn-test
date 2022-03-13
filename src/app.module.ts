import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/photo.entity';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,

        autoSchemaFile: process.env.NODE_ENV === 'production' ? '/tmp/schema.gql' :'schema.gql'
      }),
      ConfigModule.forRoot({
        isGlobal: true,
        cache: true,
        envFilePath: process.env.NODE_ENV === 'production'
          ? ["env/production.env"]
          : ["env/local.env", "env/development.env"]
      }),
      TypeOrmModule.forRoot(process.env.NODE_ENV === 'production' ? {
        type: 'mysql',
        socketPath: '/cloudsql/hallowed-cortex-343019:northamerica-northeast1:trinity',
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [Photo],
        synchronize: true,
      } : {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [Photo],
        synchronize: true,
    }),
    PhotosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
