var express = require('express');
var router = express.Router();
var acoesModel=require('../Models/acoesModel') 


router.get('/participadas', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.getAcoesParticipadas(obj);
    res.status(result.status).send(result.data);
});
router.get('/participacoes', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.getAcoesParticipacoes(obj);
    res.status(result.status).send(result.data);
});
router.get('/futuras', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.getAcoesFuturas(obj);
    res.status(result.status).send(result.data);
});










router.post('/', async function(req, res, next) {
    let acao = req.body;
    let result = await acoesModel.criarAcao(acao);
    res.status(result.status).send(result.data);
});

module.exports = router;
