var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    mensagem: {type: String, required: true},
    contato: {type: String, required: true},
    horario: {type: String, required: true},
    checkbox: {type: String, required: true}
});

module.exports = mongoose.model('Contato', schema);