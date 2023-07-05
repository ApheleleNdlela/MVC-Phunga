const mongoose = require("mongoose");

const User = mongoose.model(
"User",
// module.exports= mongoose=>{
   
   
    new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ]

    })
// schemauser.method("toJSON", function() {
//     const {_v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// }
);




module.exports = User

// let user = mongoose.model('user',schemauser );
// return user
