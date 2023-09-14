// Un decorador es una funcion que tiene acceso a la definicion de una
// clase, metodo o atributo y puede modificarla para expandir o determinar
// una funcionalidad :w
const MyDecorator = () => {
    return (target: Function) => {
        console.log(target)
    }
}

@MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    talk() {
        console.log(`${this.name}!`)
    }

}

export const charmander = new Pokemon(1, 'Charmander');
