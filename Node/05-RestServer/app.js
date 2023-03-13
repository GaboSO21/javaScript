// import { fileURLToPath } from 'url';
// import path from 'path';

require('dotenv').config();
const Server = require('./models/server.js');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const server = new Server();
server.listen();



