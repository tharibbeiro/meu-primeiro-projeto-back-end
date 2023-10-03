const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Thais Fernandes',
        imagem: 'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2019/04/lisa-1.jpg',
        minibio: 'Estudante de tecnologia'
    },
    {
        nome: 'Beyoncé',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAj6nClCoZCSKOUdjgn-4PKHjYUolxFGbLg&usqp=CAU',
        minibio: 'Cantora e a primeira mulher veado' 
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Hacker antirracista' 
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ",porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)