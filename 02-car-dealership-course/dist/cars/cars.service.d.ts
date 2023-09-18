import { Car } from './interfaces/car.interface';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    findOneById(id: string): Car;
}
