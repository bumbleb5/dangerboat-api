import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Plant, PlantDocument } from './schemas/plants.schema';

@Injectable()
export class PlantsRepository {
    constructor(@InjectModel(Plant.name) private plantModel: Model<PlantDocument>) {}

    // Methods for accessing and updating data in repository
    async findOne(plantFilterQuery: FilterQuery<Plant>): Promise<Plant> {
        return this.plantModel.findOne(plantFilterQuery);
    }

    async find(plantsFilterQuery: FilterQuery<Plant>): Promise<Plant[]> {
        return this.plantModel.find(plantsFilterQuery);
    }

    async create(plant: Plant): Promise<Plant> {
        const newPlant = new this.plantModel(plant);
        return newPlant.save();
    }

    async findOneAndUpdate(plantFilterQuery: FilterQuery<Plant>, plant: Partial<Plant>): Promise<Plant> {
        return this.plantModel.findOneAndUpdate(plantFilterQuery, plant);
    }
}
