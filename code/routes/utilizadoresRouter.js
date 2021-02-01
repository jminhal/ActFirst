var express = require('express');
var router = express.Router();
var utilizadoresModel = require('../Models/utilizadoresModel') 

//vai buscar a informação de um utilizador à base de dados
router.get('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let result = await utilizadoresModel.getUser(pos);
    res.status(result.status).send(result.data);
});

//vai verificar se o utilizador existe e vai buscar
router.get('/', async function(req, res, next) {
    let obj = req.query;
    let result = await utilizadoresModel.checkLogin(obj);
    res.status(result.status).send(result.data);
});
//vai verificar se o existe e vai criar 
router.post('/', async function(req, res, next) {
    let user = req.body;
    let result = await utilizadoresModel.createUser(user);
    res.status(result.status).send(result.data);
});
//vai remover uma certa ação de um certo utilizador
router.delete('/', async function(req, res, next) {
    let obj = req.query;
    let result = await utilizadoresModel.abandonarAcao(obj);
    res.status(result.status).send(result.data);
});
  
module.exports = router;
