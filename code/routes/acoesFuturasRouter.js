var express = require('express');
var router = express.Router();
var acoesFuturasModel=require('../Models/acoesFuturasModel') 

router.get('/', async function(req, res, next) {
    let result = await acoesFuturasModel.getAllAcoesFuturas();
    res.status(result.status).send(result.data);
});

router.get('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let result = await acoesFuturasModel.getAcaoFutura(pos);
    res.status(result.status).send(result.data);
});

module.exports = router;
