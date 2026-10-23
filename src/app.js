import express from "express";
const app = express();
//atia leitor json
app.use(express.json())

//rota saida de dados

app.get('/usuario',(req, res)=>{
    res.json(usuario)
})
app.post('/usuario',(req, res)=> {
    console.log(req.body);
    usuario.push(req.body);
    res.status(201).json({mensagem:"Clieente cadastrado!"})
})
app.listen(3000, ()=>{
    console.log("Servidor Rodando!")
})

