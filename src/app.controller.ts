import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// handles all root requests since there is no params
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    // no params
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
