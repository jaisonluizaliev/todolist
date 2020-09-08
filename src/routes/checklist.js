const express = require('express')

const router = express.Router()

const Checklist = require('../models/checklist')

//rota que procura todos os resultados
router.get('/', async (req, res) =>{
  //para procurarmos usamos o find
  try {
    let checklists = await Checklist.find()
    res.status(200).send(checklists)
  } catch (error) {
    res.status(500).json(error)  
  }
})
//rota que "post" novos results!
.post('/', async (req, res) => {
  let {name}= req.body
  try {
    //para criarmos uma nova checklist usamos  o create
    let checklist = await Checklist.create({ name })
    res.status(200).send(checklist)
  } catch (error) {
    res.status(422).json(error)  
  }
})

//rota que procura id especifico
.get('/:id', async (req, res)=>{
  try {
    let checklist = await Checklist.findById(req.params.id)
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)  
  }
})

//PUT = ATUALIZAÇÃO DE BANCO
//como atualizar com o mongose
.put('/:id', async (req, res) => {
  let {name} = req.body 
  //se tivesse mais requicisões passariamos dentro dos colchetes, exemplo description, etc....
  try {
    let checklist = await Checklist
    //para atualizar usamos o findbyidandupdate
    //dentro dele passamos o parametro que sera atualizado
    //passamos a requicisão
    //new : true serve para atualizar imediatamente
    .findByIdAndUpdate(req.params.id, {name}, {new: true})
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)  
  }
})
//DELETE = DELETAR DADOS DO BANCO
//deleta por id!
.delete('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id)
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)  
  }
})

//basta
module.exports = router