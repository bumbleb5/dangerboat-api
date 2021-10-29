import { Controller, Post, Get, Param, Patch, Body } from '@nestjs/common';

import { EventModel } from './events.model';
import { Event } from './schemas/events.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get('plantId')
    async getEvents(@Param('plantId') plantId: string): Promise<Event[]> {
        return this.eventsService.getEventsByPlantId(plantId);
    }

    @Get('eventId')
    async getEvent(@Param('eventId') eventId: string): Promise<Event> {
        return this.eventsService.getEventByEventId(eventId);
    }

    @Post()
    async createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
        return this.eventsService.createEvent(
            createEventDto.plantId,
            createEventDto.eventId,
            createEventDto.eventType,
            createEventDto.eventDate,
            createEventDto.eventNotes,
        );
    }
}
