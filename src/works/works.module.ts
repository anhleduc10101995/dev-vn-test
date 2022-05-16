import { Module, Global } from '@nestjs/common';
import { Work } from './work.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorksController } from './works.controller';
import { WorkService } from './works.service';
import { WorksResolver } from './works.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Work])],
  providers: [WorkService, WorksResolver],
  controllers: [WorksController],

})
export class WorksModule {}


