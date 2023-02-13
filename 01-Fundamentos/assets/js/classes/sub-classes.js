class Persona {

    static conteo = 0;

    nombre;
    codigo;
    frase;
    comida;

    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona.conteo++;

    }

    set setComidaFavorita(comida) {
        this.comida = comida;
    }

    get getNombre() {
        return this.nombre
    }

    static get getConteo() {
        return Persona.conteo;
    }

    static mensaje() {
        console.log('Hola');
    }

    quienSoy() {
        return this.nombre;
    }

    miFrase() {
        return this.frase;
    }

}

class Heroe extends Persona {

    clan;

    constructor(nombre, codigo, frase, clan) {
        super(nombre, codigo, frase);
        this.clan = clan;
    }

}

const spiderMan = new Heroe("Spiderman" , "Spider" , "Soy spiderman" , "Clan spiders");
console.log(spiderMan);

