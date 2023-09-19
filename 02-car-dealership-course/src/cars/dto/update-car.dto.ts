import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";


// DTO => Data Transfer Object, define estructura para datos 
// transferidos a endpoints
// Se usa cuando le informacion se mueve por varias partes
// de la aplicacion
export class UpdateCarDto {

    @IsUUID()
    @IsOptional()
    readonly id?: string;

    // Decoradores para validar datos en endpoints
    @IsString({ message: 'The brand most be a cool string' })
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly model?: string;

}
