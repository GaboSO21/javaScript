import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
// Forma implicita de clases
export class Pokemon {

    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

}

// Forma explicita
export class Bokemon {

    // Getter
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    // Readonly no deja cambiar el artibuto
    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string
    ) { }

    // Metodos
    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
        this.speak();
    }

    private speak() {
        console.log(`${this.name}`)
    }

    async getMoves(): Promise<Move[]> {
        // const moves = 10;
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        return data.moves;
    }

}
