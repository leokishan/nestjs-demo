import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Subscriber } from '../../db-models/subscriber.model';
import { Repository } from 'typeorm';
import { SubscriptionService } from '../subscription.service';

class FakeSubscriber {
  public async save(): Promise<void> {
    return null;
  }
  public async create(args) {
    return args;
  }
  public async find(): Promise<Subscriber[]> {
    return [];
  }
}

describe('Subscription service', () => {
  let subscriptionService: SubscriptionService;
  let subscriptionModel: Repository<Subscriber>;
  const DummySubscriber = {
    id: 1,
    email: 'mail@yopmail.com',
    verifiedEmail: true,
    subscriberName: 'Mailer',
    country: 'IN',
    frequency: 'Everyday',
    subscriptionTime: '2022-06-21 05:06',
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        SubscriptionService,
        {
          provide: getRepositoryToken(Subscriber),
          useClass: FakeSubscriber,
        },
      ],
    }).compile();
    subscriptionModel = moduleRef.get(getRepositoryToken(Subscriber));
    subscriptionService = new SubscriptionService(subscriptionModel);
  });
  it('List subscriber', async () => {
    const mockedFindAll = jest
      .spyOn(subscriptionModel, 'find')
      .mockResolvedValue([DummySubscriber]);
    const result = await subscriptionService.listSubscriber();
    expect(result[0].id).toBe(1);
    expect(mockedFindAll).toBeCalledTimes(1);
  });
  it('Creates subscriber', async () => {
    const mockedSave = jest
      .spyOn(subscriptionModel, 'save')
      .mockResolvedValue(DummySubscriber);
    await subscriptionService.createSubscriber({
      country: 'GB',
      email: 'tester@email.com',
      frequency: 'Daily',
      subscriberName: 'Tester',
      verifiedEmail: false,
    });
    expect(mockedSave).toBeCalledWith(
      expect.objectContaining({ email: 'tester@email.com' }),
    );
  });
});
