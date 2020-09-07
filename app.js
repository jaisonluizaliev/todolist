const express = require('express')
const checklistRouter = require('./src/routes/checklist')
//aqui imortamos as configs do mongoose 
require('./config/database')


const app = express()
app.use(express.json())

app.use('/checklist',checklistRouter)

app.listen(3000, ()=>{
  console.log('server initialized')
})
