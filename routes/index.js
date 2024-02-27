const express = require('express');
const router = express.Router();
//separar rutas a través de un módulo express


router.get('/', (req, res)=>{
    res.render('index', {
        title: 'Home'
    });

});

router.get('/newentry', (req, res)=>{
    res.render('newentry', {
        title: 'New Entry'
    });

});

module.exports = router;