module.exports = (app) => {

  const router = require('express').Router()
  const controller = require('../controllers/admin/properties-controller.js')

  router.post('/', controller.create)
  router.get('/', controller.findAll)
  router.get('/:id', controller.findOne)
  router.put('/:id', controller.update)
  router.delete('/:id', controller.delete)

  app.use('/api/admin/properties', router)

}

  //Ojo: para pasar parámetros por url primero hay que decirle al método get en '/' que recoja separe el espacio para reocger dicho parámetro; en este cado es "id"