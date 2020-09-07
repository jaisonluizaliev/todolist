const express = require('express')

const router = express.Router()

const Checklist = require('../models/checklist')

router.get('/',(req, res) =>{
  console.log("ola")
  res.send()
})
//rota post voce coleta dados e retorna-os ao usuario adqueado
.post('/', async (req, res) => {
  let {name}= req.body
  
  try {
    let checklist = await Checklist.create({ name })
    res.status(200).send(checklist)
  } catch (error) {
    res.status(422).json(error)  
  }
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