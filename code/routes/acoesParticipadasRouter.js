var express = require('express');
var router = express.Router();
var acoesParticipadasModel=require('../Models/acoesParticipadasModel') 

router.get('/', async function(req, res, next) {
    let result = await acoesParticipadasModel.getAllAcaoParticipada();
    res.status(result.status).send(result.data);
});

router.get('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let result = await acoesParticipadasModel.getAcaoParticipacao(pos);
    res.status(result.status).send(result.data);
});

module.exports = router;
