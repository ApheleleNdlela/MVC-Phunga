

module.exports = function(app) {
    const { verifySignUp } = require('../middlewares');
    const controller = require("../controller/auth.controller");

    app.use(function(req, res, next) {
        res.header(
            "Access-controlAllow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        );
        next();
    });

    app.post(
     "/api/auth/signup",
     [
        verifySignUp.CheckDuplicateEmailorUsername
     ],
     controller.signup   
    );

    app.post("/api/auth/signin", controller.signin);
    // app.get("/api/auth/create", controller.findAll);
    app.post("/create", controller.signup);



};