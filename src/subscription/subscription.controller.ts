import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Subscriber } from '../db-models/subscriber.model';
import { CreateSuscriberDto } from './dto/CreateSubscriber.dto';
import { SubscriptionService } from './subscription.service';

@ApiTags('Subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @ApiOperation({ description: 'Get list of subscribers.' })
  @Get()
  listSubscriber(): Promise<Array<Subscriber>> {
    return this.subscriptionService.listSubscriber();
  }

  @ApiOperation({ description: 'Create a subscriber.' })
  @Post()
  createSubscriber(
    @Body() subscriber: CreateSuscriberDto,
  ): Promise<Subscriber> {
    return this.subscriptionService.createSubscriber(subscriber);
  }
}
