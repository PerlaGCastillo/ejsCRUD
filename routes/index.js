module.exports = (app) => {
//     const express = require('express');
// const router = express.Router();
// //separar rutas a través de un módulo express

    let entries = [];
    app.locals.entries = entries;

    app.get('/', (req, res)=>{
        res.render('index', {
            title: 'Home'
        });

    });

    app.get('/newentry', (req, res)=>{
        res.render('newentry', {
            title: 'New Entry'
        });

    });

    app.post('/newentry', (req, res) => {
        if(!req.body.title || !req.body.body){
            res.send(400).send('Entradas deben tener un título y un cuerpo');
        }
        let newEntry = {
            title: req.body.title,
            content: req.body.body,
            published: new Date()
        }; 

        entries.push(newEntry);

        res.redirect('/');

    });

// module.exports = router;

}