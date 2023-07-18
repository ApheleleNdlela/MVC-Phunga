const mongoose = require("mongoose");

const User = mongoose.model(
"User",
// module.exports= mongoose=>{
   
   
    new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
    
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
