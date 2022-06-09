require('dotenv').config();
/* Inicializando Express */
const express = require('express');
const hbs = require('hbs');
/* App */
const app = express();
/* PORT */
const SERVER_PORT = process.env.PORT;

/* Handlebars */
hbs.registerPartials( __dirname + '/views/partials' );



app.set('view engine', 'hbs');

/* SERVIR CONTENIDO ESTÁTICO */
app.use( express.static('public') );

app.get('/', ( req, res ) => {
    res.render('home', {
        name: 'David Acosta',
        title: 'Curso de Node'
    });
});

app.get('/generic', ( req, res ) => {
    res.render('generic',{
        name: 'David Acosta',
        title: 'Curso de Node'
    });
});

app.get('/elements', ( req, res ) => {
    res.render('elements', {
        name: 'David Acosta',
        title: 'Curso de Node'
    });
});


app.listen( SERVER_PORT, () => {
    console.log(`Server corriendo en el puerto ${SERVER_PORT}`);
});