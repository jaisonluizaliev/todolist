const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  res.send('<h1>Minha lista de tarefas!</h1>')
})
.listen(3000, ()=>{
  console.log('server initialized')
})
