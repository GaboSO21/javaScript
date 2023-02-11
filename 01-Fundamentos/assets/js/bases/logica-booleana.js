
const regresatrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

// Condicion Not
console.log(!true);
console.log(!regresatrue());

// And
console.log(true && true);
console.log(true && false);

console.log(regresaFalse() && regresatrue());
console.log(regresatrue() && regresaFalse());

console.warn('OR');
console.log(true || false);
console.log(regresatrue() || regresaFalse());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || 'Ya no soy falso' || soyNull || soyUndefined;

console.log({a1});
console.log({a2});
console.log({a3});
console.log({a4});