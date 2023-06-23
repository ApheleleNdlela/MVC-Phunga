const config = require('../config/Auth.config');
const db = require('../model');
const User = db.user;
const Role = db.role;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password,8)
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        if (req.body.roles) {
            Role.find(
                {
                    name: {$in: req.body.roles}
                },
                (err,roles) => {
                if (err) {
                    res.status(500).send({ message: err});
                    return;
                }

                user.roles = roles.map(role => role._id);
                user.save(err => {
                    if (err) {
                        res.status(500).send({message: err});
                        return;
                    }

                    res.send({message: "User was registered successfully!"})
                })
                }
            );
        } else {
            Role.findOne({ name: 'user'}, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err});
                    return;
                }

                user.roles = [role._id];
                user.save(err => {
                    if (err) {
                        res.status(500).send({message: err});
                        return;
                    }

                    res.send({ message: "user was resgistered successfully!"})
                })
            })
        }
    })
}

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })

    .populate("roles","-__V")
    .exec((err,user) => {
        if (err) {
            res.status(500).send({ message: err});
            return;
        }

        if (!user) {
            return res.status(404).send({message: 'User not Found'});
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid password!"
            });
        }
            var token = jwt.sign({id: user.id}, config.secret, {
                expiresIn: 86400
            });

            var authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                
                username: user.username,
                email: user.email,
                id: user._id,
                roles: authorities,
                accessToken: token
            });
        
    });
}

exports.create = async (req, res)=>{
    // if(!req.body){
    //     res.status(400).send("cannot add without info")
    //     return
    // }
    // // let results;

    const user = new User({
    
        username : req.body.username,
        email: req.body.email,
        password : req.body.password


    })

    try{
        user.save()
        .then(user=>{
            console.log(user)
            res.send(user)
        })
        return
    } catch (err){
        res.status(500).send('could not create new user')
        console.log(`some err occured : ${err.message}`)
    }
    
}
