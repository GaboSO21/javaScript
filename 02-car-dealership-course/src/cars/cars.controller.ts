import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
/*
 * Controlador => Encargado de manejar las requests de rutas especificas,
 * clase contiene endpoints.
 */
@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService,
    ) {
    }

    // Decorador para endpoints
    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    // @Get() recibe parametro mas rutas, dichos datos de rutas pasables por @Param
    // Pipes transforman datos de requests, se ponen en @Param
    // Instancias pipes para mayor customizacion de mensaje de error
    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return createCarDto;
    }

    @Patch(':id')
    updateCar(
        @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
        @Body() body: any
    ) {
        return {
            id,
            body
        }
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return {
            id,
            method: 'delete'
        }
    }

}
