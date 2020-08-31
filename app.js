const express = require('express')
const checklistRouter = require('./src/routes/checklist')

const app = express()

app.use(express.json())

app.use(checklistRouter)

.listen(3000, ()=>{
  console.log('server initialized')
})
