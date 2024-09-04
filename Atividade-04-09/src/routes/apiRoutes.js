const router = require('express').Router();


//Importa a controller de profesores onde contem a logica relacionada a professores
const controllerNumbers = require('../controllers/controllerNumbers');

///Rota POST para '/teacher'
router.post('/par/',controllerNumbers.postPar); 
router.post('/primo/',controllerNumbers.postPrimo); 

module.exports = router