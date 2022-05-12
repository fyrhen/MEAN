var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function (req, res, next) {
    Message.find()
        .exec(function(err, result) {
            if(err) {
                return res.status(500).json({
                    myErroTitle: 'Um erro aconteceu na hora de buscar a mensagem',
                    myError: err
                });
            }
            res.status(200).json({
                myMsgSucess: "Mensagem recuperada com sucesso",
                objSMessageSRecuperadoS : result
            });
        });
});

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if(err) {
            return res.status(500).json({
                myErroTitle: 'Um erro aconteceu na hora de salvar a mensagem',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Mensagem salva com sucesso",
            objMessageSave : result
        });
    });
});

router.delete('/messageDelete/:id', function (req, res) {
    const id = req.params.id
    Message.findByIdAndRemove(id, function(err, result) {
        if(err) {
            return res.status(500).json({
                myErroTitle: 'Um erro aconteceu na hora de deletar a mensagem',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Mensagem deletada com sucesso",
            objMessageSave : result
        });
    });
});

module.exports = router;