class Persona {

    constructor(name) {
        this.name = name;
    }

    saludar(name) {
        console.log('Hola mi nombre es: ' + name);
    }

}

let persona = new Persona('Gabriel');
persona.saludar(persona.name);