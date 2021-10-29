import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Event, EventDocument } from './schemas/events.schema';

@Injectable()
export class EventsRepository {
    constructor(
        @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    ) {}

    async findOne(eventsFilterQuery: FilterQuery<Event>): Promise<Event> {
        return this.eventModel.findOne(eventsFilterQuery);
    }

    async find(eventsFilterQuery: FilterQuery<Event>): Promise<Event[]> {
        return this.eventModel.find(eventsFilterQuery);
    }

    async create(event: Event): Promise<Event> {
        const newEvent = new this.eventModel(event);
        return newEvent.save();
    }
}
