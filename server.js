const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando App
const app = express();
// Permite receber um JSON na aplicação
app.use(express.json());
// Habilita uso do cors, com isso o cors vai permitir o acesso de outros dominios 
//app.use(cors);

//Conectando ao mongodb
mongoose.connect("mongodb://localhost:27017/node-api", { useNewUrlParser: true });

requireDir("./src/models");

//Cria intidade Product
const product = mongoose.model('Product'); 

//Cria Rotas
app.use("/api", require("./src/routes"));

//Executa
app.listen(3001);