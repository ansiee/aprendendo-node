const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.send("Criando minha primeira rota usando framework express");
});

// Criando um array de produtos
const produtos = [];

// POST - Inserir um dado
app.post("/produtos", (request, response) =>{

    // Desestruturando um objeto
    const { name, price, description} =
    request.body

    const produto = {
        id: randomUUID(),
        name : name,
        price : price ,
        description : description
    }

    produtos.push(produto);
    return response.json(produto);
});


app.listen(5000, () => console.log ("Servidor está sendo executado na porta 5000."));