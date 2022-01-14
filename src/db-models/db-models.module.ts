import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subscriber } from './subscriber.model';

@Module({
  imports: [SequelizeModule.forFeature([Subscriber])],
  exports: [SequelizeModule],
})
export class DbModelsModule {}
