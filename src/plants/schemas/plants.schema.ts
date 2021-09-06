import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
// TODO: relate genusId to Genus schema
// import { Genus } from '../genus/genus.schema';

export type PlantDocument = Plant & Document;

// @ Schema marks a class as a schema definition, maps Plant class to a mongodb collection with a plural name
// schema accepts an optional options prop
@Schema()
export class Plant {
    // defines a property in the document
    @Prop({ required: true })
    plantId: string;
    @Prop()
    commonName: string;
    @Prop()
    botName: string;
    @Prop()
    acqDate: string;
    @Prop()
    lightPref: number;
    @Prop()
    waterPref: number;
    @Prop()
    npkPref: string;
    @Prop()
    location: string;
    @Prop()
    genusId: string;
    // TODO check relation syntax
    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Genus' })
    // genus: Genus;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);
