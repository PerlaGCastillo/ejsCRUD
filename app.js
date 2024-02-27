//1 importar express
const express = require('express');
//9 importar el módulo morgan
const morgan = require('morgan');
//6 configurar path para views
const path = require('path');
//10 requerir bodyparser para entender peticiones post
const bodyParser = require('body-parser');

//2  instanciar la clase express a través de una variable app
const app = express();




//4 setear para ir al puerto 3000 si no esta configurada
app.set('port', process.env.PORT || 3000);

//5 configurar views, unir dos directorios , 
app.set('views', path.join(__dirname, 'views'));
//7 establecer el motor de plantillas 
app.set('view engine', 'ejs');

//8 mostrar por consola todas las peticiones que vengan a nuestro servidor
app.use(morgan('dev'));
//11 - servidor para que entienda peticiones post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//12 routes
require('./routes/index')(app);
 
// 3 iniciarla en un puerto y función para escucharla
app.listen(app.get('port'), () => {
    console.log(`servidor en puerto ${app.get('port')}`, )
});
