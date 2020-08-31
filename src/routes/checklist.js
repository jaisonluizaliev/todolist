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
//basta
module.exports = router