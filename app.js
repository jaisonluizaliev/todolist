const express = require('express')

const app = express()
//usando middlewares, por padrão o express ja tras um em json
app.use(express.json())
//uma função q retorna a resposta deste middleware
function log(req, res, next) {
  console.log(req.body)
  console.log(`Data: ${Date.now()}`)
  next()
}

app.use(log) //chamando o log

//ae vamos no postman e usamos o json e o send

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
