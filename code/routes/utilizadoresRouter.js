var express = require('express');
var router = express.Router();
var utilizadoresModel=require('../Models/utilizadoresModel') 

router.get('/', async function(req, res, next) {
    let result = await utilizadoresModel.getAllUtilizadores();
    res.status(result.status).send(result.data);
});

router.get('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let result = await utilizadoresModel.getUtilizador(pos);
    res.status(result.status).send(result.data);
});

router.post('/login', async function(req, res, next) {
    let result = await utilizadoresModel.login(req.body.username);
    res.status(result.status).
       send(result.data);
  });
  
module.exports = router;
