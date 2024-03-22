import { Module } from '@nestjs/common';
import { MarksController } from './marks.controller';
import { MarksService } from './marks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marks } from './marks.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Marks])
  ],
  controllers: [MarksController],
  providers: [MarksService]
})
export class MarksModule { }
