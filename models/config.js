const express = require('express');
const cors = require('cors');
require("dotenv").config();

class Server {
    constructor (){
        this.app = express();
        this.port  = process.env.PORT;
        this.webhookPath = '/api/Webhook';

        this.middlewares();

        // Habilitamos las rutas
        this.routes();
    }

    // Son nuestras Funciones que se ejecutan al instante
    middlewares(){

        //Cors
        this.app.use( cors() );

        // Lectura en Json
        this.app.use( express.json());

        // Directorio Publico del Frontend
        //this.app.use( express.static('public'));
        
    }

    routes(){
        this.app.use(this.webhookPath, require('../routes/webhook-routes'));
        
    }
    // Nuestro metodo del Server Puerto
    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor Corriendo en el Puerto ${ this.port }`);
        });
    }
}

module.exports = Server