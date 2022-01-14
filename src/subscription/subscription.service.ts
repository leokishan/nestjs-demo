import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subscriber } from 'src/db-models/subscriber.model';
import { CreateSuscriberDto } from './dto/CreateSubscriber.dto';
import { format } from 'date-fns';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel(Subscriber) private subscriberModel: typeof Subscriber,
  ) {}

  listSubscriber(): Promise<Array<Subscriber>> {
    return this.subscriberModel.findAll();
  }

  createSubscriber(subscriber: CreateSuscriberDto): Promise<Subscriber> {
    return this.subscriberModel.create({
      ...subscriber,
      subscriptionTime: format(new Date(), 'yyyy-MM-dd hh:mm'),
    });
  }
}
