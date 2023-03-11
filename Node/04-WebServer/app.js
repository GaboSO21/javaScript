import { fileURLToPath } from 'url';
import path from 'path';

import express from "express";
import hbs from 'hbs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => { console.log(err) });

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Gabriel',
        titulo: 'Curso node'
    });
})


app.get('/elements', (req, res) => {

    // res.sendFile(__dirname + '/public/elements.html');
    res.render('elements', {
        nombre: 'Gabriel',
        titulo: 'Me encanta node'
    });

});

app.get('/generic', (req, res) => {

    // res.sendFile(__dirname + '/public/generic.html');
    res.render('generic', {
        nombre: 'Gabriel',
        titulo: 'Estoy aprendiendo'
    });

})

app.get('*', (req, res) => {

    // res.sendFile(__dirname + '/public/404.html');
    res.render('404');

})

app.listen(8080);



















// import http from 'http';


// http.createServer((req, res) => {

    // res.write('hola mundo');
    // res.end();


// })
    // .listen(8080);

// console.log('Escuchando el puerto', 8080);

