import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
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
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
        @Body() updateCarDto: UpdateCarDto
    ) {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
    }

}
