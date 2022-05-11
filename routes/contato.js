var express = require('express');
var router = express.Router();
var Contato = require("../models/contato");

router.post('/', function(req, res, next) {
    addToDB(req, res);
});

async function addToDB(req, res) {
    
    var contato = new Contato({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        mensagem: req.body.mensagem,
        contato: req.body.contato,
        horario: req.body.horario,
        checkbox: req.body.checkbox
    });

    try{
        doc = await contato.save();
        return res.status(201).json(doc);
    }
    catch(err) {
        return res.status(501).json(err);
    }
}

module.exports = router;