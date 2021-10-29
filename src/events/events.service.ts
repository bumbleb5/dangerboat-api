import { Injectable } from '@nestjs/common';

import { EventModel } from './events.model';
import { uuidv4 } from '../util/uuid';
import { EventsRepository } from './events.repository';
import { Event } from './schemas/events.schema';

@Injectable()
export class EventsService {
    constructor(private readonly eventsRepository: EventsRepository) {}

    async getEventsByPlantId(plantId: string): Promise<Event[]> {
        return this.eventsRepository.find({ plantId });
    }

    async getEventByEventId(eventId: string): Promise<Event> {
        return this.eventsRepository.findOne({ eventId });
    }

    // am never going to want to do this??
    // getEvents(): Promise<Event[]> {
    //     return this.eventsRepository.find({});
    // }

    async createEvent(
        plantId: string,
        eventId: string,
        eventType: string,
        eventDate: string,
        eventNotes: string,
    ): Promise<Event> {
        return this.eventsRepository.create({
            plantId,
            eventId: uuidv4(),
            eventType,
            eventDate,
            eventNotes,
        });
    }
}
