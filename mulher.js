const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Thais Fernandes',
        image: 'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2019/04/lisa-1.jpg',
        minibio: 'Estudante de tecnologia'
        })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ",porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostraPorta)
