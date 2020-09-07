//configuração mongoose
const mongoose = require('mongoose')
//importamos a promisse global do mongoose
mongoose.Promise = global.Promise
//config
//mongo conecte-se com o localhost todo-list
//configs padrões
//tente senão retorne um erro!
mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log('Conectado ao Mongo DB')})
.catch((err)=>{console.error(err)})