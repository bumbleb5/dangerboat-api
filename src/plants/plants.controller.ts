// THIRD STEP - IMPORT SERVICE SO CONTROLLER CAN CALL
import { Controller, Post, Body } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { Plant } from './plants.model';


@Controller('plants')
export class PlantsController {
    // PASSING CONSTRUCTOR IN AN INSTANCE OF PLANTS SERVICE
    // Private ensures that the param is stored in a property with the same name only accessible to the controller
    // readonly ensures that we never replace the plantService with a new value
    constructor(private readonly plantsService: PlantsService) {}
    @Post()
    // Body decorator parses body for specified properties and assigns them to arguments
    addPlant(
        // Extract entire body
        // @Body()
        // completeBody: {
        //     commonName: string;
        //     botName: string;
        //     acqDate: string;
        //     lightPref: number;
        //     waterPref: number;
        //     npkPref: string;
        //     location: string;
        //     genusId: string;
        // },
        // Alternatively can extract each individual property
        @Body('commonName') commonName: string,
        @Body('botName') botName: string,
        @Body('acqDate') acqDate: string,
        @Body('lightPref') lightPref: number,
        @Body('waterPref') waterPref: number,
        @Body('npkPref') npkPref: string,
        @Body('location') location: string,
        @Body('genusId') genusId: string,
    ): Plant {
        const addedPlant = this.plantsService.addPlant(commonName, botName, acqDate, lightPref, waterPref, npkPref, location, genusId);
        console.log('Plants controller adding plant');
        console.log(addedPlant);
        return addedPlant;
    }
};