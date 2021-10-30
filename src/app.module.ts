import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PlantsModule } from './plants/plants.module';
import { EventsModule } from './events/events.module';

require('dotenv').config();

@Module({
    imports: [
        PlantsModule,
        EventsModule,
        ProductsModule,
        MongooseModule.forRoot(
            `mongodb+srv://${process.env.DEMO_USER}:${process.env.DEMO_PASSWORD}@${process.env.CLUSTER}.mxxgn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
