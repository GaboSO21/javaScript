
const arr = new Array(10);
console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Zelda' ];
// console.log({videoJuegos});

// console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Gabriel',
    1 + 2,
    function(){},
    { a:1 },
    ['X' , 'Megaman' , 'Zero', 'Dr.Light']
];

// console.log({arregloCosas});
console.log(arregloCosas[6][3]);

arregloCosas.forEach(element => {
    console.log(element);
});