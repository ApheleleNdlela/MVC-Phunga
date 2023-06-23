const db = require("../model")
const config = require("../config/Auth.config")
const User = db.user

exports.allAccess = (req,res) => {
    res.status(200).send('Public Content');
};

exports.userBoard = (req, res) => {
    res.status(200).send('user Content.');
};

exports.adminBoard = (req, res) => {
    res.status(200).send('Admin Content.');
}







