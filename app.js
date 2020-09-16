const express = require('express');
const path = require('path');

const checkListRouter = require('./src/routes/checklist');
const taskRouter = require('./src/routes/task');

//pagina teste
const rootRouter = require('./src/routes/index');

//method override...o thml 5 n da suporte para methodos PUT/DELETE então é ecessário a instalação deste method
const methodOverride = require('method-override');

//aqui imortamos as configs do mongoose 
require('./config/database');


const app = express();
app.use(express.json())

//habilitando uso de url de forms
app.use(express.urlencoded({ extended: true }));

//method override
//aqui eu to falando para o metodo override sobrescrever os padrões post e get
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

//habilitando uso de arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//adicionamos o path para falar onde estão nossas views para uso do ejs!
app.set('views', path.join(__dirname, 'src/views'));

//agora irei instalar a minha view engine
app.set('view engine', 'ejs');

//added rota para teste com o ejs
//middlewares
app.use('/', rootRouter);
app.use('/checklists', checkListRouter);
app.use('/checklists', taskRouter.checklistDepedent);
app.use('/tasks', taskRouter.simple)

app.listen(3000, () => {
  console.log('Server initialized');
})

