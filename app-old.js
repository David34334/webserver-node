
// Creación del server
const http = require('http');

//Inicialización
http.createServer( (req, res) => {
    res.write('Hola mundo');
    res.end();
}).listen( 8080 );

console.log('Escuchando en el puerto: ', 8080);