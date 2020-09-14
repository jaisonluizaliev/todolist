//importando mongoose///database!
const mongoose = require ('mongoose')

//schema(modelo que vamos utilizar o nosso documento, não e necessario, porem e legal ter para ver em forma estruturada)
const checklistSchema = mongoose.Schema({
  //formato: tudo que for nome será uma string e obrigatorio!
  name: { type: String, required:true},
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

module.exports = mongoose.model("Checklist", checklistSchema)