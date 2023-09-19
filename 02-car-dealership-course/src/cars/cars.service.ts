import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corola'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Nissan',
            model: 'GTR'
        }
    ]

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);

        if (!car) {
            // 404
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        return car;
    }

    create(createCarDto: CreateCarDto) {

        const newCar: Car = {
            id: uuid(),
            // brand: createCarDto.brand,
            // model: createCarDto.model
            ...createCarDto
        };

        this.cars.push(newCar);

        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto) {

        let carDb = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException(`Car id is not valid in body`);
        }

        this.cars = this.cars.map(car => {

            if (car.id === id) {

                carDb = {
                    ...carDb,
                    ...updateCarDto,
                    id
                };

                return carDb;
            }

            return car;

        })

        return carDb; // carro actualizado

    }

    delete(id: string) {

        const carDb = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id);

        return carDb; // undefined

    }

}
