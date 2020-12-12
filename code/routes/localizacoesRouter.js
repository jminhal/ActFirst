var express = require('express');
var router = express.Router();
var localizacoesModel=require('../Models/localizacoesModel') 

router.get('/', async function(req, res, next) {
    let result = await localizacoesModel.getAllLocalizacoes();
    res.status(result.status).send(result.data);
});

router.get('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let result = await localizacoesModel.getlocalizacao(pos);
    res.status(result.status).send(result.data);
});

module.exports = router;
