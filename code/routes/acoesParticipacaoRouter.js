var express = require('express');
var router = express.Router();
var acoesParticipacaoModel=require('../Models/acoesParticipacaoModel') 

router.get('/', async function(req, res, next) {
    let result = await acoesParticipacaoModel.getAllAcoesParticipacao();
    res.status(result.status).send(result.data);
});

router.get('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let result = await acoesParticipacaoModel.getAcaoParticipacao(pos);
    res.status(result.status).send(result.data);
});

module.exports = router;
