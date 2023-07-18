module.exports = rs =>{
    const router = require("express").Router();
    const controller = require('../controller/item.controller')
    const { authJwt } = require("../middlewares/index")

    router.post('/', [authJwt.verifyToken, authJwt.isAdmin], controller.create);
    router.get('/', controller.getAll);
    router.delete('/All', controller.deleteAll);
    router.put('/:id', controller.update)
    router.delete('/:id', controller.deleteOne)
    router.get('/:id', controller.getOne)

rs.use('/v1/items',router);

}