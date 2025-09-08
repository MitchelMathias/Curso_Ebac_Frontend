const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/t', (req, res)=>{
    let {nome, idade} = req.body
    idade += 2
    nome +=" Teste"
    console.log(nome, idade)
    res.json({nome, idade})
})

app.listen(3000, ()=> {
    console.log('Servidor Rodando na porta 3000')
})