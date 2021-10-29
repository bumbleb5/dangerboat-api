import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

// @ Schema marks a class as a schema definition, maps Plant class to a mongodb collection with a plural name
// schema accepts an optional options prop
@Schema()
export class Event {
    // defines a property in the document
    @Prop({ required: true })
    plantId: string;
    @Prop({ required: true })
    eventId: string;
    @Prop({ required: true })
    eventType: string;
    @Prop({ required: true })
    eventDate: string;
    @Prop()
    eventNotes: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
