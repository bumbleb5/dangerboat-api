// SECOND STEP - DEFINE METHODS IN SERVICE
import { Injectable } from '@nestjs/common';

import { PlantModel } from './plants.model';
import { uuidv4 } from '../util/uuid';
import { PlantsRepository } from './plants.repository';
import { Plant } from './schemas/plants.schema';
import { UpdatePlantDto } from './dto/update-plant.dto';

@Injectable()
export class PlantsService {
    constructor(private readonly plantsRepository: PlantsRepository) {}

    async getPlantById(plantId: string): Promise<Plant> {
        return this.plantsRepository.findOne({ plantId });
    }

    async getPlants(): Promise<Plant[]> {
        return this.plantsRepository.find({});
    }

    async createPlant(
        commonName: string,
        botName: string,
        acqDate: string,
        lightPref: number,
        waterPref: number,
        npkPref: string,
        location: string,
        genusId: string,
    ): Promise<Plant> {
        return this.plantsRepository.create({
            plantId: uuidv4(),
            commonName,
            botName,
            acqDate,
            lightPref,
            waterPref,
            npkPref,
            location,
            genusId,
        });
    }

    async updatePlant(plantId: string, plantUpdates: UpdatePlantDto): Promise<Plant> {
        return this.plantsRepository.findOneAndUpdate({ plantId }, plantUpdates);
    }
    // ----------------------
    // just for testing but keeping for reference :)
    // plants: PlantModel[] = [];

    // addPlant(
    //     commonName: string,
    //     botName: string,
    //     acqDate: string,
    //     lightPref: number,
    //     waterPref: number,
    //     npkPref: string,
    //     location: string,
    //     genusId: string,
    // ): PlantModel {
    //     const plantId = uuidv4();
    //     const newPlant = new PlantModel(
    //         plantId,
    //         commonName,
    //         botName,
    //         acqDate,
    //         lightPref,
    //         waterPref,
    //         npkPref,
    //         location,
    //         genusId,
    //     );
    //     this.plants.push(newPlant);
    //     console.log('Plants Service making new plant!!');
    //     return newPlant;
    // }
}
