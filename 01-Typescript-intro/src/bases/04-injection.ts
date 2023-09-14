import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter } from '../api/pokeApi.adapter';

// Forma explicita
export class Pokemon {

    // Getter
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    // Readonly no deja cambiar el artibuto
    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string
        // Principio de sustitucion de Liskov, no importa cual clase se use mientras
        // implemente HttpAdapter
        private readonly http: HttpAdapter
    ) { }

    // Metodos
    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
        this.speak();
    }

    private speak() {
        console.log(`${this.name}`)
    }

    // Metodo asincrono, retorna promesa de tipo generico Move[]
    async getMoves(): Promise<Move[]> {
        // Tipo generico de interfaz PokeapiResponse para tener accesso a datos de respuesta 
        // http previo a ejecucion
        // Inyeccion de dependencia
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        return data.moves;
    }

}

export const charizard = new Pokemon(1, 'Charizard', new PokeApiAdapter());
