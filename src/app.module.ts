import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentdetailModule } from './studentdetail/studentdetail.module';
import { MarksModule } from './marks/marks.module';
import { KafkaModule } from './kafka/kafka.module';
import { ProducerService } from './kafka/producer.service';
import { TestConsumer } from './kafka/test.consumer';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'Testing_Final',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    StudentdetailModule,
    MarksModule,
    KafkaModule
  ],
  controllers: [AppController],
  providers: [ProducerService, AppService, TestConsumer],
})
export class AppModule { }
