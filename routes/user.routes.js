const router = require("express").Router();
const controller = require('../controller/user.controller');
const { authJwt } = require("../middlewares");
// const router = require("express").Router()


module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    router.get("/1", [authJwt.verifyToken], controller.userBoard);
    router.get("/2", [authJwt.isAdmin],controller.adminBoard);    
    router.get("/3", controller.allAccess);
    router.get("/", controller.findAll)
    app.use('/v2/users/',router);


};

