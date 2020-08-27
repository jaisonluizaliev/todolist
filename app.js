const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  res.send('<h1>Minha lista de tarefas!</h1>')
})
//devolvendo json no get
//geralmente devolve um objeto ou array
.get('/json', (req, res) => {
  res.json({
    name: "jaison",
    idade: 26,
    profissão: 'programmer'
})
})
.listen(3000, ()=>{
  console.log('server initialized')
})
