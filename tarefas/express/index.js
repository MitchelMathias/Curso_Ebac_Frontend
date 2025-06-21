const express = require('express')
const app = express()

app.get('/t', (req, res)=>{
    res.send('Ola mundo')
})

app.listen(3000, ()=> {
    console.log('Servidor Rodando na porta 3000')
})