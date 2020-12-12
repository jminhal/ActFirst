var express = require('express');
var router = express.Router();
var acoesModel=require('../Models/acoesModel') 

router.get('/', async function(req, res, next) {
    let result = await acoesModel.getAllAcoes();
    res.status(result.status).send(result.data);
});

router.get('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let result = await acoesModel.getAcao(pos);
    res.status(result.status).send(result.data);
});

module.exports = router;
