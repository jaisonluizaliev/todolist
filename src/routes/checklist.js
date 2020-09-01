const express = require('express')

const router = express.Router()

router.get('/',(req, res) =>{
  console.log("ola")
  res.send()
})
//rota post voce coleta dados e retorna-os ao usuario adqueado
.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body)
})

.get('/:id', (req, res)=>{
  console.log(req.params.id)
  res.send(`ID: ${req.params.id}`)
})
//PUT = ATUALIZAÇÃO DE BANCO
.put('/:id', (req, res) => {
  console.log(req.body)
  res.send(`PUT ID: ${req.params.id}`)
})
//DELETE = DELETAR DADOS DO BANCO
.delete('/:id', (req, res) => {
  console.log(req.body)
  res.send(`DELETE ID: ${req.params.id}`)
})

//basta
module.exports = router