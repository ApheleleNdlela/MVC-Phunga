const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.item = require("./item.model.js")(mongoose);
db.user = require("./user.model")
db.role = require("./role.model")
db.cart = require("./cart.model")(mongoose)

db.ROLES = ["User","Admin"]

module.exports = db;