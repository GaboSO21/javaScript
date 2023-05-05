const express = require('express');
const cors = require('cors');
const { connectDB } = require('../db/config');

// Clase de servidor express

class Server {

    // Constructor que inicializa la aplicacion, establece puerto,
    // rutas para apis, inicializar db y middlewares
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            users: '/api/users',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            login: '/api/auth',
        }

        // Conectar db
        this.database();

        // Middlewares
        this.middlewares();

        // Rutas de app
        this.routes();
    }

    async database() {

        await connectDB();

    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Parseo y lectura del body
        this.app.use(express.json());

        // Directorio public/static
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.paths.login, require('../routes/auth'));

        this.app.use(this.paths.users, require('../routes/user'));

        this.app.use(this.paths.categorias, require('../routes/categorias'));

        this.app.use(this.paths.productos, require('../routes/productos'));

        this.app.use(this.paths.buscar, require('../routes/buscar'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
        });

    }

}

module.exports = Server;

