import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
/*
 *  Modulo => wrapper de controladores, servicios etc para
 *  trabajo mas ordenado y modulado.
*/
@Module({
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule { }
