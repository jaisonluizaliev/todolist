const express = require('express')
const path = require('path')
const checklistRouter = require('./src/routes/checklist')
//pagina teste
const rootRouter = require('./src/routes/index')
//aqui imortamos as configs do mongoose 
require('./config/database')

const app = express()
app.use(express.json())
//habilitando uso de url de forms
app.use(express.urlencoded({extended:true}))
//habilitando uso de arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')))
//adicionamos o path para falar onde estão nossas views para uso do ejs!
app.set('views', path.join(__dirname, 'src/views'))
//agora irei instalar a minha view engine
app.set('view engine', 'ejs')
//added rota para teste com o ejs
app.use('/', rootRouter)
app.use('/checklists',checklistRouter)


app.listen(3000, ()=>{
  console.log('server initialized')
})
