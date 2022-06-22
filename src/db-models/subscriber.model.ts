import { Column, BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'arr_subs' })
export class Subscriber {
  // @Column()
  // @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  verifiedEmail: boolean;

  @Column()
  subscriberName: string;

  @Column()
  country: string;

  @Column()
  frequency: string;

  @Column()
  subscriptionTime: string;
}
