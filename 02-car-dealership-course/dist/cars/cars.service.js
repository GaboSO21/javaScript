"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CarsService = class CarsService {
    constructor() {
        this.cars = [
            {
                id: (0, uuid_1.v4)(),
                brand: 'Toyota',
                model: 'Corola'
            },
            {
                id: (0, uuid_1.v4)(),
                brand: 'Honda',
                model: 'Civic'
            },
            {
                id: (0, uuid_1.v4)(),
                brand: 'Nissan',
                model: 'GTR'
            }
        ];
    }
    findAll() {
        return this.cars;
    }
    findOneById(id) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new common_1.NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }
    create(createCarDto) {
        const newCar = {
            id: (0, uuid_1.v4)(),
            ...createCarDto
        };
        this.cars.push(newCar);
        return newCar;
    }
    update(id, updateCarDto) {
        let carDb = this.findOneById(id);
        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new common_1.BadRequestException(`Car id is not valid in body`);
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
        });
        return carDb;
    }
    delete(id) {
        const carDb = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        return carDb;
    }
};
exports.CarsService = CarsService;
exports.CarsService = CarsService = __decorate([
    (0, common_1.Injectable)()
], CarsService);
//# sourceMappingURL=cars.service.js.map