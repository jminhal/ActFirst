var express = require('express');
var router = express.Router();
var acoesModel=require('../Models/acoesModel') 

router.get('/', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.getAcoesParticipar(obj);
    res.status(result.status).send(result.data);
});

router.post('/', async function(req, res, next) {
    let acao = req.body;
    let result = await acoesModel.criarAcao(acao);
    res.status(result.status).send(result.data);
});

router.get('/participadas', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.getAcoesParticipadas(obj);
    res.status(result.status).send(result.data);
});

module.exports = router;
