var express = require('express');
var router = express.Router();
var utilizadoresModel = require('../Models/utilizadoresModel') 

router.get('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let result = await utilizadoresModel.getUser(pos);
    res.status(result.status).send(result.data);
});

router.get('/', async function(req, res, next) {
    let obj = req.query;
    let result = await utilizadoresModel.checkLogin(obj);
    res.status(result.status).send(result.data);
});

router.post('/', async function(req, res, next) {
    let user = req.body;
    let result = await utilizadoresModel.createUser(user);
    res.status(result.status).send(result.data);
});
  
module.exports = router;
