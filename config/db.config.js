require("dotenv").config()
module.exports = {
    // db_url: "mongodb://127.0.0.1:27017/phunga_db"
    db_url: process.env.phunga_db
};
