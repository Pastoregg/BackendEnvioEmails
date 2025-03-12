const express = require("express");
const { cadastrarEmail, enviarNewsletter } = require("./controladores/newsletter");

const rotas = express();

//rota home
rotas.get("/", (req, res) => { res.send("Bem vindo!...");});
//rota email,  exemplo#1
rotas.post("/emails", cadastrarEmail);
//rota newsletter , exemplo#2
rotas.post("/newsletter", enviarNewsletter);

module.exports = rotas;