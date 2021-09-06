// THIRD STEP - IMPORT SERVICE SO CONTROLLER CAN CALL
import { Controller, Post, Get, Param, Patch, Body } from '@nestjs/common';

import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { PlantsService } from './plants.service';
import { PlantModel } from './plants.model';
import { Plant } from './schemas/plants.schema';

@Controller('plants')
export class PlantsController {
    // PASSING CONSTRUCTOR IN AN INSTANCE OF PLANTS SERVICE
    // Private ensures that the param is stored in a property with the same name only accessible to the controller
    // readonly ensures that we never replace the plantService with a new value
    constructor(private readonly plantsService: PlantsService) {}

    @Get(':plantId')
    async getPlant(@Param('plantId') plantId: string): Promise<Plant> {
        return this.plantsService.getPlantById(plantId);
    }

    @Get()
    async getPlants(): Promise<Plant[]> {
        return this.plantsService.getPlants();
    }

    @Post()
    async createPlant(@Body() createPlantDto: CreatePlantDto): Promise<Plant> {
        return this.plantsService.createPlant(
            createPlantDto.commonName,
            createPlantDto.botName,
            createPlantDto.acqDate,
            createPlantDto.lightPref,
            createPlantDto.waterPref,
            createPlantDto.npkPref,
            createPlantDto.location,
            createPlantDto.genusId,
        );
    }

    @Patch(':plantId')
    async updatePlant(@Param('plantId') plantId: string, @Body() updatePlantDto: UpdatePlantDto): Promise<Plant> {
        return this.plantsService.updatePlant(plantId, updatePlantDto);
    }

    // @Post()
    // // Body decorator parses body for specified properties and assigns them to arguments
    // addPlant(
    //     // Extract entire body
    //     // @Body()
    //     // completeBody: {
    //     //     commonName: string;
    //     //     botName: string;
    //     //     acqDate: string;
    //     //     lightPref: number;
    //     //     waterPref: number;
    //     //     npkPref: string;
    //     //     location: string;
    //     //     genusId: string;
    //     // },
    //     // Alternatively can extract each individual property
    //     @Body('commonName') commonName: string,
    //     @Body('botName') botName: string,
    //     @Body('acqDate') acqDate: string,
    //     @Body('lightPref') lightPref: number,
    //     @Body('waterPref') waterPref: number,
    //     @Body('npkPref') npkPref: string,
    //     @Body('location') location: string,
    //     @Body('genusId') genusId: string,
    // ): PlantModel {
    //     const addedPlant = this.plantsService.createPlant(commonName, botName, acqDate, lightPref, waterPref, npkPref, location, genusId);
    //     console.log('Plants controller adding plant');
    //     console.log(addedPlant);
    //     return addedPlant;
    // }
}
