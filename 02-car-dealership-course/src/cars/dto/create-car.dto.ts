import { IsString, MinLength } from "class-validator";


// DTO => Data Transfer Object, define estructura para datos 
// transferidos a endpoints
export class CreateCarDto {

    // Decoradores para validar datos en endpoints
    @IsString({ message: 'The brand most be a cool string' })
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;

}
