import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscriber } from '../db-models/subscriber.model';
import { CreateSuscriberDto } from './dto/CreateSubscriber.dto';
import { format } from 'date-fns';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberModel: Repository<Subscriber>,
  ) {}

  listSubscriber(): Promise<Array<Subscriber>> {
    return this.subscriberModel.find();
  }

  async createSubscriber(subscriber: CreateSuscriberDto): Promise<Subscriber> {
    const subscriberObj = await this.subscriberModel.create({
      ...subscriber,
      subscriptionTime: format(new Date(), 'yyyy-MM-dd hh:mm'),
    });
    return this.subscriberModel.save(subscriberObj);
  }
}
