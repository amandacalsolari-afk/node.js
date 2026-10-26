import express from "express";
const app = express();
//atia leitor json
app.use(express.json())

//rota saida de dados

app.get('/usuario',(req, res)=>{
    const nomeBusca = req.query.nome;
    if(nomeBusca){
        const nomes = usuario.filter( (i)=>{
            return i.nome.toLowerCase().includes(nomeBusca.toLowerCase());
        })
        return res.status(200).json(nomes);
    }

    res.status(200).json(usuario);
})


app.post('/usuario',(req, res)=> {
    console.log(req.body);
    usuario.push(req.body);
    res.status(201).json({mensagem:"Cliente cadastrado!"})
})
app.listen(3000, ()=>{
    console.log("Servidor Rodando!")
})

