// SECOND STEP - DEFINE METHODS IN SERVICE
import { Injectable } from '@nestjs/common';

import { Plant } from './plants.model';
import { uuidv4 } from '../util/uuid';

@Injectable()
export class PlantsService {
    plants: Plant[] = [];

    addPlant(
        commonName: string,
        botName: string,
        acqDate: string,
        lightPref: number,
        waterPref: number,
        npkPref: string,
        location: string,
        genusId: string,
    ): Plant {
        const plantId = uuidv4();
        const newPlant = new Plant(
            plantId,
            commonName,
            botName,
            acqDate,
            lightPref,
            waterPref,
            npkPref,
            location,
            genusId,
        );
        this.plants.push(newPlant);
        console.log('Plants Service making new plant!!');
        return newPlant;
    }
}
