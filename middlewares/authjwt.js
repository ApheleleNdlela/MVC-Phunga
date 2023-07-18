const jwt = require("jsonwebtoken");
const config = require("../config/Auth.config.js");
const db = require('../model');
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({message: 'no token provided'});
    }


jwt.verify(token, config.secret, (err, decoded)=> {
    if (err) {
        return res.status(401).send({message: 'unauthorised!'});
    }
    req.userId = decoded.id;
    req.isAdmin = decoded.isAdmin;
    next();
});
}

isAdmin = (req, res, next) => {
    if(req.isAdmin != true){
        return res.status(401).send({message: 'You not an admin!'});
    }
    next();
;}

const authJwt = {
    verifyToken,
    isAdmin
};

module.exports = authJwt;