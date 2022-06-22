import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from './subscriber.model';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  exports: [TypeOrmModule],
})
export class DbModelsModule {}
