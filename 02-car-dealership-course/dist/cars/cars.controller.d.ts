import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): import("./interfaces/car.interface").Car[];
    getCarById(id: string): import("./interfaces/car.interface").Car;
    createCar(createCarDto: CreateCarDto): CreateCarDto;
    updateCar(id: string, body: any): {
        id: string;
        body: any;
    };
    deleteCar(id: string): {
        id: string;
        method: string;
    };
}
