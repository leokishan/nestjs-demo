import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubscriptionModule } from './subscription/subscription.module';
import { DbModelsModule } from './db-models/db-models.module';
import { Subscriber } from './db-models/subscriber.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      models: [Subscriber],
    }),
    SubscriptionModule,
    DbModelsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
