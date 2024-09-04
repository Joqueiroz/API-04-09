//Importa o módulo Rounter do express, Rounter sera utilizado para definir rotas específicas na aplicação
const router = require('express').Router();

//Importa a controller onde contém a lógica relacionada a professores
const controllerNumbers = require('../controllers/controllerNumbers');

//Rota POST para '/teacher'
router.post('/teacher/', controllerNumbers.postTeacher);

router.get('/teacher', controllerNumbers.getTeacher);

module.exports = router
