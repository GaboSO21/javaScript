import { IsString, MinLength } from "class-validator";


// DTO => Data Transfer Object, define estructura para datos 
// transferidos a endpoints
// Se usa cuando le informacion se mueve por varias partes
// de la aplicacion
export class CreateCarDto {

    // Decoradores para validar datos en endpoints
    @IsString({ message: 'The brand most be a cool string' })
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;

}
