// Interfaz, para predeterminar estructura de objectos json
// age? => vuelve opcional un campo del objeto
interface Pokemon {
    id: number,
    name: string,
    age?: number
}

export const pokemonIds = [1, 2, 3, 4];

// Otra manera de conversion a numeros en vez de Number()
pokemonIds.push(+'1')

export const charizard: Pokemon = {
    id: 1,
    name: 'Charizard'
}

// Tipado de arreglos
// Arreglo de objetos Pokemon
export const pokemons: Pokemon[] = [];

