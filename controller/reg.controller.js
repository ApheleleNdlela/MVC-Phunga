// const User = require("../model");

// exports.signup = (req, res) => {

//     const user = new user({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//     });
  
//     user.save((err, user) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }
//     });

//   exports.signin = (req, res) => {
//     User.findOne({
//       username: req.body.username,
//     })
//       .exec((err, user) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         }
//         if (!user) {
//           return res.status(404).send({ message: "User Not found." });
//         }

//         if (!passwordIsValid) {
//           return res.status(401).send({ message: "Invalid Password!" });
//         }

//       });
  
//   };
  
//   exports.signout = async (req, res) => {
//     try {
//       req.session = null;
//       return res.status(200).send({ message: "You've been signed out!" });
//     } catch (err) {
//       this.next(err);
//     }
//   }}