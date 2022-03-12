import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import "reflect-metadata";
// import { createConnection } from "typeorm";
// import { Photo } from "./photos/Photo";

// createConnection({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "1234",
//     database: "trinity",
//     entities: [
//         Photo
//     ],
//     synchronize: true,
//     logging: false
// }).then(connection => {
//     // here you can start to work with your entities
// }).catch(error => console.log(error));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("process.env.PORT");
  console.log(process.env.PORT);
  const PORT = Number(process.env.PORT) || 8080;
  console.log(PORT);
  await app.listen();
}
bootstrap();
