/*const express = require('express')

const router = express.Router()

const Checklist = require('../models/checklist')


router.get('/', async (req, res) =>{
  try {
    let checklists = await Checklist.find({})
    res.status(200).render('checklists/index', { checklists: checklists })//=> o mesmo q{checklists:checklists}
  } catch (error) {
    res.status(422).render('pages/error', { error: 'erro ao exibir as Listas'})
  }
})


//rota form
router.get('/new', async(req, res)=>{
  try {
    let checklist = new Checklist()
    res.status(200).render('checklists/new', {checklist : checklist})
  } catch (error) {
    res.status(500).render('pages/error', {errors:' Erro ao carrregar o formulario'})
  }
})


//rota de edição
router.get('/:id/edit', async(req, res)=>{
  try {
    let checklist = await (await Checklist.findById(req.params.id)).populate('tasks')//igual ao agregate, é uma forma de relacionar
    res.status(200).render('checklists/edit', {checklist:checklist})
  } catch (error) {
    res.status(500).render('pages/error', {error:'erro ao exibir a lista de tarefas'})
  }
})


//rota que "post" novos results!
router.post('/', async (req, res) => {
  let { name }= req.body.checklist
  let checklist = new Checklist({ name })
  try {
    //para criarmos uma nova checklist usamos  o create
    await checklist.save()
    res.redirect('/checklists')
  } catch (error) {
    res.status(422).render('checklists/new', { checklist: {...checklist,error} })

  }
})


//rota que procura id especifico
router.get('/:id', async (req, res)=>{
  try {
    let checklist = await Checklist.findById(req.params.id)
    res.status(200).render('checklists/show', { checklist: checklist })
  } catch (error) {
    res.status(422).render('pages/error', { error:' erro ao exibir as listas de tarefas '})
  }
})

//PUT = ATUALIZAÇÃO DE BANCO
//como atualizar com o mongose
//atualizando as tasks
router.put('/:id', async (req, res) => {
  let {name} = req.body.checklist 
  let checklist = await Checklist.findById(req.params.id) 
  //se tivesse mais requicisões passariamos dentro dos colchetes, exemplo description, etc....
  try {
    //para atualizar usamos o findbyidandupdate
    //dentro dele passamos o parametro que sera atualizado
    //passamos a requicisão
    //new : true serve para atualizar imediatamente
    await checklist.update({ name })
    res.redirect('/checklists')
  } catch (error) {
    let errors = error.errors
    res.status(422).render('checklists/edit', {checklist: {...checklist, errors}})  
  }
})

//DELETE = DELETAR DADOS DO BANCO
//deleta por id!
router.delete('/:id', async (req, res) => {
  try {
    let checklist = await Checklist
    .findByIdAndRemove(req.params.id)
    res.redirect('/checklists')
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao deletar lista de tarefas '})
  }
})

//basta
module.exports = router /*/

const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist');

router.get('/', async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    res.status(200).render('checklists/index', { checklists: checklists})
  } catch (error) {
    res.status(200).render('pages/error', {error: 'Erro ao exibir as Listas'});
  }
})

router.get('/new', async(req, res) => {
  try {
    let checklist = new Checklist();
    res.status(200).render('checklists/new', { checklist: checklist });
  } catch (error) {
    res.status(500).render('pages/error', { errors: 'Erro ao carregar o formulário' })
  }
})

router.get('/:id/edit', async(req, res) =>{
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render('checklists/edit', { checklist: checklist })
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir a edição Listas de tarefas'});
  }
})

router.post('/', async (req, res) => {
  let { name } = req.body.checklist;
  let checklist = new Checklist({name})

  try {
    await checklist.save();
    res.redirect('/checklists');
  } catch (error) {
    res.status(422).render('checklists/new', { checklist: { ...checklist, error}})
  }
})

router.get('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id).populate('tasks');
    res.status(200).render('checklists/show', { checklist: checklist})
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir as Listas de tarefas'});
  }
})

router.put('/:id', async (req, res) => {
  let { name } = req.body.checklist;
  let checklist = await Checklist.findById(req.params.id);

  try {
    await checklist.update({name});
    res.redirect('/checklists');
  } catch (error) {
    let errors = error.errors;
    res.status(422).render('checklists/edit', {checklist: {...checklist, errors}});
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.redirect('/checklists');
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao delete a Lista de tarefas'});
  }
})

  
module.exports = router;