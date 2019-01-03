const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     //res.send('Hello World')
//     let output = {
//         name: 'Irving',
//         edad: 28,
//         url: req.url
//     };

//     res.send(output);

// });

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'IrviNg vEgA',
    });

});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});