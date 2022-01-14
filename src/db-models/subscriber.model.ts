import { Column, Model, Table, Index, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'arr_subscribers', createdAt: false, updatedAt: false })
export class Subscriber extends Model {
  @PrimaryKey
  @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  email: string;

  @Column
  verifiedEmail: boolean;

  @Column
  subscriberName: string;

  @Column
  country: string;

  @Column
  frequency: string;

  @Column
  subscriptionTime: string;
}
