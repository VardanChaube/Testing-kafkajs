import { Module } from '@nestjs/common';
import { StudentdetailController } from './studentdetail.controller';
import { StudentdetailService } from './studentdetail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentDetail } from './student-details.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentDetail])
  ],
  controllers: [StudentdetailController],
  providers: [StudentdetailService]
})
export class StudentdetailModule { }
