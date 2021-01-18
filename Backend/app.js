const con = require('./conexao');
const conexao = con.conexao();
const express = require('express');
const exp = express();
let body_parser = require('body-parser');
const cors = require('cors');


exp.set('view engine', 'ejs');
exp.use(body_parser.json());
exp.use(cors());
exp.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

let servidor = exp.get('/produtos', (requisitar, resposta) => {
    con.produtos(conexao, resposta);
})
exp.get('/produtos_destaque', (requisitar, resposta) => {
    con.produtos_destaque(conexao, resposta);
})
/*exp.get('/enviar_compra', (requisitar, resposta) => {
    console.log("ihuu");
})*/
exp.post('/enviar_compra', (requisitar, resposta) => {
    con.enviar_compra(conexao, resposta, requisitar.body);
    console.log(requisitar.body)
})
exp.post('/enviar_mensagem', (requisitar, resposta) => {
    con.enviar_mensagem(conexao, resposta, requisitar.body);
    console.log(requisitar.body);
})
let porta = 8080;

servidor.listen(porta);
