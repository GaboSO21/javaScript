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

const spiderMan = new Persona("Spider Man", 2323, "Soy SpiderMan!");
const ironMan = new Persona("Iron Man", 2020, "Soy IronMan");
console.log(spiderMan.quienSoy());
console.log(spiderMan.miFrase());
console.log(spiderMan.getNombre);
spiderMan.setComidaFavorita = "Pie de cereza";
console.log(spiderMan);
console.log(Persona.conteo);
console.log(Persona.getConteo);

Persona.propiedadExterna = "Hola desde afuera";
console.log(Persona.propiedadExterna);
