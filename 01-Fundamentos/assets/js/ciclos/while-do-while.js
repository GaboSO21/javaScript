

const carros = ['A', 'b', 'c', 'd'];

let i = 0;

while (i < carros.length) {
    if (i == 2) {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}