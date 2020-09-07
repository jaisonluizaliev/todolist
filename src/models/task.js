//importando mongoose///database!
const mongoose = require('mongoose')

//schema(modelo que vamos utilizar o nosso documento, não e necessario, porem e legal ter para ver em forma estruturada)
const taskSchema = mongoose.Schema({
  //formato: tudo que for nome será uma string e obrigatorio!
  name: { type: String, required: true },
  done: { type: Boolean, default: false},
  checklist: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Checklist',
    required: true
  }
})

module.exports = mongoose.model('Task', taskSchema)
