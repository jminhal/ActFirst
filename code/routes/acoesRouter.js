var express = require('express');
var router = express.Router();
var acoesModel=require('../Models/acoesModel') 

//acoes que o utilizador podera participar (ações da pagina procurar_ações)
router.get('/', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.getAcoesParticipar(obj);
    res.status(result.status).send(result.data);
});
//
router.get('/:pos(\\d+)', async function(req, res, next) {//  \\d+ significa que só aceita inteiros
    let obj = req.params.pos;
    let result = await acoesModel.getAcao(obj);
    res.status(result.status).send(result.data);
});

//insere a ação na tabela acaoUtilizador
router.post('/addacao', async function(req, res, next) {
    let acao = req.body;
    let result = await acoesModel.addAcaoUtilizador(acao);
    res.status(result.status).send(result.data);
});



//vai buscar as ações a participar(AP) de um certo utilizador
router.get('/participadas', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.getAcoesParticipadas(obj);
    res.status(result.status).send(result.data);
});

//vai buscar as ações a participação(APP) de um certo utilizador
router.get('/participacao', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.getAcoesParticipacaoPresente(obj);
    res.status(result.status).send(result.data);
});

//vai buscar as ações a futuras(AF) de um certo utilizador
router.get('/futuras', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.getAcoesFuturas(obj);
    res.status(result.status).send(result.data);
});

//vai buscar os tipoAcao
router.get('/tipoacoes', async function(req, res, next) {
    let result = await acoesModel.getTipoAcoes();
    res.status(result.status).send(result.data);
});
//Quando a organização cria uma ação
router.post('/', async function(req, res, next) {
    let acao = req.body;
    let result = await acoesModel.criarAcao(acao);
    res.status(result.status).send(result.data);
});
//vai apagar uma certa ação de uma certa organização
router.delete('/', async function(req, res, next) {
    let obj = req.query;
    let result = await acoesModel.apagarAcao(obj);
    res.status(result.status).send(result.data);
});

module.exports = router;
