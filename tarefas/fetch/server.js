const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static(__dirname))


app.post('/teste', (req,res) =>{
    console.log(req.body)
    const nome = req.body.nome
    const idade = parseInt(req.body.idade) + 5
    console.log(nome)
    res.json({idade} )
})


app.listen(3000)
console.log('Concectado na porta 3000')