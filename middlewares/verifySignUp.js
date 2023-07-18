const db = require("../model");
const ROLES = db.ROLES;
const User = db.user;

const CheckDuplicateEmailorUsername = async (req, res, next) => {
    try {
      // Check duplicate username
      const usernameUser = await User.findOne({ username: req.body.username }).exec();
      if (usernameUser) {
        return res.status(400).send({ message: "Failed! Username is already in use!" });
      }
  
      // Check duplicate email
      const emailUser = await User.findOne({ email: req.body.email }).exec();
      if (emailUser) {
        return res.status(400).send({ message: "Failed! Email is already in use!" });
      }
  
      next();
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  };

const verifySignUp = {
    CheckDuplicateEmailorUsername
};

module.exports = verifySignUp;